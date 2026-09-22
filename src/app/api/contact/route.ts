
import Contact from "@/model/Contact";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    await connect();

    const allContact = await Contact.find();

    return new NextResponse(JSON.stringify(allContact), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error" + error, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();

  // console.log(body);
  const newContact = new Contact(body);
  // console.log(newContact);
  try {
    await connect();

    await newContact.save();

    return new NextResponse(newContact, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error" + error, { status: 500 });
  }
};
