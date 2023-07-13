import mongoose from "mongoose";

import { Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    name: {
      type: String,
    },
    company: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;