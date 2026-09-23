"use client";
import { useEffect, useState, type FormEvent } from "react";
import LoadingButton from "./spinner/LoadingButton";
// import { HiOutlineMailOpen, HiOutlineLocationMarker } from "react-icons/Hi";
// import { ImLocation2 } from "react-icons/im";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

const Contact = () => {
  const [sendLoading, setSendLoading] = useState(false);
  const { toast } = useToast()


  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSendLoading(true);
    // console.log(e.target[0].value);
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const message = (form[2] as HTMLTextAreaElement).value;
    console.log(name, email, message);

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (!res.ok) {
        console.log(res.status);
        setSendLoading(false);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "faild to send message.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
        throw new Error("Faild to send request" + res.status);
      }
      setSendLoading(false);
      form.reset();
      toast({
        description: "Your message has been sent.",
      });
    } catch (error) {
      console.log(error);
      throw new Error("Faild to send request" + error);
    }
  };

  return (
    <div className="grid min-h-[calc(100svh-5rem)] content-center gap-12 border-t border-neutral-200 py-24 md:py-32 md:grid-cols-2 dark:border-neutral-800">
      <div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Contact Me</h2>
        <div className="mt-6 space-y-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
          <p>Thank you for taking the time to explore my portfolio project.</p>
          <p>
            If you have any questions, feedback, or would like to discuss
            potential collaborations, I would love to hear from you. Please feel
            free to get in touch with me, just fill out the contact form.
          </p>
        </div>
      </div>

      <form onSubmit={submitForm} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
          <input type="text" id="name" className="block w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-sm outline-hidden transition-colors placeholder:text-neutral-400 focus:border-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-neutral-300" placeholder="name..." autoComplete="on" required />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
          <input type="email" id="email" className="block w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-sm outline-hidden transition-colors placeholder:text-neutral-400 focus:border-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-neutral-300" placeholder="name@example.com" autoComplete="on" required />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
          <textarea id="message" rows={4} className="block w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-sm outline-hidden transition-colors placeholder:text-neutral-400 focus:border-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-neutral-300" placeholder="Leave a comment..." autoComplete="on" required></textarea>
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-lg bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors enabled:hover:bg-neutral-800 disabled:opacity-70 dark:bg-white dark:text-neutral-950 dark:enabled:hover:bg-neutral-200"
          disabled={sendLoading}
        >
          {sendLoading ? <LoadingButton /> : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
