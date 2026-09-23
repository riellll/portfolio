import { experience, technologies } from "@/constants";

const Experience = () => {
  return (
    <div className="grid min-h-[calc(100svh-5rem)] content-center gap-16 border-t border-neutral-200 py-24 md:py-32 lg:grid-cols-[1fr_20rem] lg:gap-0 dark:border-neutral-800">
      <div className="lg:border-r lg:border-neutral-200 lg:pr-16 dark:lg:border-neutral-800">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Experience</h2>
        <ol className="mt-8 space-y-10 border-l border-neutral-200 dark:border-neutral-800">
          {experience.map((job) => (
            <li key={job.role} className="relative pl-8">
              <span className="absolute top-2 -left-[5px] size-2.5 rounded-full bg-neutral-950 dark:bg-white" />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{job.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{job.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="lg:pl-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Technologies</h2>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-neutral-100 px-3.5 py-1.5 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
