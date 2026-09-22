import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className="grid bg-white gap-14 pt-5 content-center justify-items-center text-center  xl:px-56 md:px-16 sm:px-14 min-[320px]:px-8 min-[320px]:pb-48 md:mb-20 sm:mb-20 dark:bg-linear-to-r dark:from-gray-800 dark:to-slate-900">
    <div className="flex flex-col place-self-start text-gray-900 dark:text-white sm:pb-5">
    <span className="text-3xl font-bold text-transparent bg-clip-text text-start bg-linear-to-r from-gray-800 via-gray-900 to-gray-950 dark:to-emerald-600 dark:via-cyan-500 dark:from-cyan-400">Projects</span>
    <span className="text-transparent text-sm sm:text-base bg-clip-text text-start bg-linear-to-r from-gray-800 via-gray-900 to-gray-950 dark:to-emerald-600 dark:via-cyan-500 dark:from-cyan-400">Here are some of the projects I&#39;ve worked on.</span>
    </div>

    
<div className="grid grid-cols-3 items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row dark:border-gray-700 dark:bg-gray-800">
    <img className="bg-cover bg-no-repeat w-full rounded-t-lg h-96 md:h-full md:w-full md:rounded-none md:rounded-s-lg" src="/proj1.PNG" alt=""/>
    <div className="col-span-2 flex flex-col justify-between p-2 text-start leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cinezone</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Dive into an extensive and ever-growing collection of movies from different genres, eras, and cultures. a meticulously crafted movie collection app that seamlessly combines the power of React and Next.js with the vast MovieDB API. you can effortlessly search for your favorite films or discover hidden gems that you never knew existed.</p>
    <div className="flex justify-center gap-4 pt-3 flex-wrap">
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              React
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Javascript
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Next.js
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Tailwind
            </p>
          </div>
    <div className="flex justify-center gap-4 pt-10">
            <Link
              href={"https://cinezone-x.vercel.app/"}
              target="_blank"
              className="transition ease-in-out delay-100 duration-1000 font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-linear-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-linear-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950 dark:shadow-gray-950/80"
            >
              Live Demo
            </Link>
            <Link
              href={"https://github.com/riellll/cinezoneX"}
              target="_blank"
              className="transition ease-in-out delay-100 duration-1000 font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-linear-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-linear-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950 dark:shadow-gray-950/80"
            >
              Source Code
            </Link>
          </div>
    </div>
    </div>

  </div>
  )
}

export default Projects