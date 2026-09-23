import { Mail } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { links } from "@/constants";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-extrabold tracking-tight">GN</span>
          <div>
            <p className="text-sm font-medium">Gabriel Napiere</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Full-Stack Software Engineer · Manila, Philippines</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-5 text-xl">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><BsGithub /></a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin /></a>
            <a href={`mailto:${links.email}`} aria-label="Email"><Mail className="size-5" /></a>
          </div>
          <p className="border-l border-neutral-200 pl-6 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            &#169; {new Date().getFullYear()} Gabriel Napiere
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
