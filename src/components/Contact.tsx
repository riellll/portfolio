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
    <div className="grid sm:gap-10 gap-5 pt-5 lg:mt-20 content-center justify-items-center text-center max-w-5xl mx-auto md:px-7 sm:mb-20 ">
      <h1 className="text-3xl font-bold justify-self-start text-gray-900 dark:text-white ">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-800 via-gray-900 to-gray-950 dark:to-emerald-600 dark:via-cyan-500 dark:from-cyan-400">
          Contact Me
        </span>
      </h1>
      <div className="grid grid-cols sm:grid-cols-2 gap-5">
        <div className="text-start">
          <h1 className="text-xl font-bold dark:text-gray-300 pb-2 sm:pb-3">
            Hello,
          </h1>
          <p className="font-medium dark:text-gray-300">
            Thank you for taking the time to explore my portfolio project.
          </p>
          <p className="font-medium dark:text-gray-300">
            If you have any questions, feedback, or would like to discuss
            potential collaborations, I would love to hear from you. Please feel
            free to get in touch with me, just fill out the contact form.
          </p>
        </div>

        <form onSubmit={submitForm}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-xs bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg outline-hidden ring-0 focus:shadow-none focus:outline-hidden border focus:border-slate-600 focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-slate-600 dark:shadow-sm-light"
              placeholder="name..."
              autoComplete="on"
              required
            />
          </div>
          {/*           <div className="mb-6">
            <label
              htmlFor="company"
              className="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="company..."
              autoComplete="on"
              required
            />
          </div> */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-xs bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg outline-hidden ring-0 focus:shadow-none focus:outline-hidden border focus:border-slate-600 focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-slate-600 dark:shadow-sm-light"
              placeholder="name@example.com"
              autoComplete="on"
              required
            />
          </div>

          <label
            htmlFor="message"
            className="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="shadow-xs bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg outline-hidden ring-0 focus:shadow-none focus:outline-hidden border focus:border-slate-600 focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-slate-600 dark:shadow-sm-light"
            placeholder="Leave a comment..."
            autoComplete="on"
            required
          ></textarea>
          <div className="flex mt-6">
            <button
              type="submit"
              className={`font-semibold grow rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 ${
                !sendLoading &&
                `hover:shadow-xl hover:shadow-slate-900/40 hover:bg-slate-950`
              } dark:text-black dark:shadow-lg dark:bg-linear-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 ${
                !sendLoading &&
                "dark:hover:bg-linear-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950"
              } dark:shadow-gray-950/80`}
              disabled={sendLoading && true}
            >
              {sendLoading ? <LoadingButton /> : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
