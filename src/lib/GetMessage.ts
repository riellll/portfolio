import Contact from "@/model/Contact";
import connect from "@/utils/db";

export type ContactMessage = {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export default async function GetMessage(): Promise<ContactMessage[]> {
  await connect();
  const docs = await Contact.find().sort({ createdAt: -1 }).lean();

  return docs.map((doc) => ({
    _id: String(doc._id),
    name: doc.name ?? "",
    email: doc.email ?? "",
    message: doc.message ?? "",
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }));
}
