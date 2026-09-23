import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/constants";

const Project = () => {
  return (
    <div className="border-t border-neutral-200 py-24 md:py-32 dark:border-neutral-800">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Personal Projects</h2>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        A few personal projects I&#39;ve built to explore ideas, learn new technologies, and improve my skills.
      </p>

      <ul className="mt-12">
        {projects.map((project) => (
          <li
            key={project.title}
            className="grid gap-6 border-t border-neutral-200 py-10 first:border-t-0 first:pt-0 md:grid-cols-[16rem_1fr] md:gap-x-10 lg:grid-cols-[18rem_1fr_8rem] dark:border-neutral-800"
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
              className="block self-start overflow-hidden rounded-lg border border-neutral-200 md:row-span-2 lg:row-span-1 dark:border-neutral-800"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="aspect-video w-full object-cover object-top"
              />
            </a>

            <div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {project.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-6 text-sm font-medium md:col-start-2 lg:col-start-auto lg:flex-col lg:gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-blue-600 underline underline-offset-4 dark:text-blue-400"
              >
                Live site
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
                >
                  View code
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
