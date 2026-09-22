"use client";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-linear-to-r dark:from-gray-800 dark:to-slate-900 shadow-lg sticky top-0">
        <div className="max-w-(--breakpoint-xl) flex flex-wrap items-center sm:justify-between min-[320px]:justify-center mx-auto p-2 sm:p-4">
          <a href="#" className="flex items-center">
            <h1 className="self-center text-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              gab.<span className="text-black dark:text-cyan-500">dev</span>
            </h1>
          </a>

          <div className="w-full min-[620px]:w-auto" id="navbar_default">
            <ul className="font-medium flex flex-row justify-center sm:p-2 min-[620px]:p-0 sm:mt-2 rounded-lg min-[620px]:flex-row min-[620px]:space-x-8 min-[620px]:-mt-2 min-[620px]:border-0 dark:border-slate-700">
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
                <Link
                  activeClass="active border-b-2 border-y-slate-700 dark:border-y-cyan-400"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  // crossOrigin="true"
                >
                  Home
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
                <Link
                  activeClass="active border-b-2 border-y-slate-700 dark:border-y-cyan-400"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  // crossOrigin="true"
                >
                  About
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
                <Link
                  activeClass="active border-b-2 border-y-slate-700 dark:border-y-cyan-400"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  // crossOrigin="true"
                >
                  Project
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
                <Link
                  activeClass="active border-b-2 border-y-slate-700 dark:border-y-cyan-400"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  // crossOrigin="true"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
