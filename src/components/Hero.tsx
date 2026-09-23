'use client'
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { links } from "@/constants";

const Hero = () => {
  return (
    <div className="grid min-h-[calc(100svh-5rem)] content-center gap-12 py-16 md:grid-cols-[1fr_16rem]">
      <div>
        <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase dark:text-neutral-400">
          Full-Stack Software Engineer
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl dark:text-white">
          Hi, I&#39;m Gabriel
          <br />
          Noe Napiere.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          I&#39;m a full-stack software engineer. I bring ideas to life through
          elegant code and intuitive designs. My goal is to deliver seamless,
          responsive, and scalable web applications that not only meet the
          clients&#39; needs but also exceed their expectations.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <ScrollLink
            to="project"
            smooth
            offset={-80}
            duration={500}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            View my work <ArrowRight className="size-4" />
          </ScrollLink>
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            <Download className="size-4" /> My Resume
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
            <BsGithub className="size-5" /> GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
            <BsLinkedin className="size-5" /> LinkedIn
          </a>
          <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 hover:underline">
            <Mail className="size-5" /> Email
          </a>
        </div>
      </div>

      <aside className="hidden self-start pt-2 text-sm md:block">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 size-4 text-neutral-500" />
          <div>
            <p className="font-medium">Manila, Philippines</p>
            <p className="mt-1 text-neutral-500 dark:text-neutral-400">{links.email}</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Hero;
