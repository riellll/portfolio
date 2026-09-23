'use client'
import { useState } from 'react'
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { navbarItem, links } from '@/constants';
import FloatingAction from './theme/FloatingAction';

const Navbarr = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-white/85 backdrop-blur-md dark:bg-neutral-950/85">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="hero" smooth duration={500} className="flex cursor-pointer items-center gap-4">
          <span className="text-2xl font-extrabold tracking-tight">GN</span>
          <span className="hidden text-sm font-medium sm:block">Gabriel Noe Napiere</span>
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {navbarItem.map(item => (
            <Link
              key={item.value}
              to={item.value}
              spy
              smooth
              offset={-80}
              duration={500}
              activeClass="text-neutral-950! dark:text-white!"
              className="cursor-pointer text-sm text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <FloatingAction />
          <Link
            to="contact"
            smooth
            offset={-80}
            duration={500}
            className="cursor-pointer rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4 sm:hidden">
          <FloatingAction />
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="flex flex-col gap-4 border-t border-neutral-200 bg-white px-6 py-6 text-sm sm:hidden dark:border-neutral-800 dark:bg-neutral-950">
          {[...navbarItem, { value: "contact", label: "Contact" }].map(item => (
            <Link
              key={item.value}
              to={item.value}
              smooth
              offset={-80}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer font-medium"
            >
              {item.label}
            </Link>
          ))}
          <a href={links.resume} target="_blank" rel="noreferrer">Resume</a>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      )}
    </header>
  )
}

export default Navbarr
