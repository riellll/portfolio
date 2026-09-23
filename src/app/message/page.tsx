import { createHash, timingSafeEqual } from "node:crypto";
import GetMessage from "@/lib/GetMessage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Message",
  description: "list of messages",
  robots: { index: false, follow: false },
};

// hash both sides so timingSafeEqual gets equal-length buffers
const matchesPassword = (pass: unknown) => {
  const secret = process.env.SEARCHPASS;
  if (!secret || typeof pass !== "string") return false;
  const hash = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(hash(pass), hash(secret));
};

const Message = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { pass } = await searchParams;
  const authorized = matchesPassword(pass);
  const data = authorized ? await GetMessage() : [];

  return (
    <main className="mx-auto min-h-[calc(100svh-5rem)] w-full max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Messages</h1>

      {!authorized && (
        <p className="mt-6 text-neutral-500 dark:text-neutral-400">Hello there!</p>
      )}

      {authorized && (
        <>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {data.length} {data.length === 1 ? "message" : "messages"}, newest first
          </p>
          <ul className="mt-10">
            {data.map((item) => (
              <li
                key={item._id}
                className="border-t border-neutral-200 py-8 first:border-t-0 first:pt-0 dark:border-neutral-800"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <time
                    dateTime={item.createdAt}
                    className="text-sm text-neutral-500 dark:text-neutral-400"
                  >
                    {new Date(item.createdAt).toDateString()}
                  </time>
                </div>
                <a
                  href={`mailto:${item.email}`}
                  className="text-sm text-blue-600 underline underline-offset-4 dark:text-blue-400"
                >
                  {item.email}
                </a>
                <p className="mt-4 text-sm leading-relaxed whitespace-pre-line text-neutral-700 dark:text-neutral-300">
                  {item.message}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default Message;
