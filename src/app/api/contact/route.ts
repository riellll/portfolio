import Contact from "@/model/Contact";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

// No GET handler on purpose: messages contain visitors' names and emails,
// and are only readable through the password-protected /message page.

const MAX_LENGTH = { name: 100, email: 254, message: 5000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactFields = Record<keyof typeof MAX_LENGTH, string>;

const parseContact = (body: unknown): ContactFields | null => {
  if (typeof body !== "object" || body === null) return null;

  const fields: Partial<ContactFields> = {};
  for (const key of Object.keys(MAX_LENGTH) as (keyof ContactFields)[]) {
    const value = (body as Record<string, unknown>)[key];
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    if (!trimmed || trimmed.length > MAX_LENGTH[key]) return null;
    fields[key] = trimmed;
  }

  return EMAIL_PATTERN.test(fields.email!) ? (fields as ContactFields) : null;
};

export const POST = async (request: Request) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const fields = parseContact(body);
  if (!fields) {
    return NextResponse.json(
      { error: "Name, a valid email, and a message are required" },
      { status: 400 }
    );
  }

  try {
    await connect();
    await Contact.create(fields);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
};
