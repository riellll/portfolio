const About = () => {
  return (
    <div className="flex min-h-[calc(100svh-5rem)] flex-col justify-center border-t border-neutral-200 py-24 md:py-32 dark:border-neutral-800">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About</h2>
      <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
        <p>
          I&#39;m Gabriel, a software engineer based in Manila, Philippines. I got
          into programming through a coding bootcamp, and since 2024 I&#39;ve been
          building production web applications for a US-based real estate
          technology company, working across the full stack with TypeScript,
          React, Next.js, Node.js, and PostgreSQL.
        </p>
        <p>
          I enjoy turning complicated, real-world workflows into software that
          feels simple to use, and I care about writing code that the next
          developer can easily understand and build on. Lately I&#39;ve been
          exploring AI-assisted development, using tools like Claude and MCP to
          automate parts of my workflow.
        </p>
        <p>
          Outside of coding, I appreciate art and music. They keep me creative
          and make me a better problem solver.
        </p>
      </div>
    </div>
  );
};

export default About;
