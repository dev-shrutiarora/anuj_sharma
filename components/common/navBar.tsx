'use client';

import Link from 'next/link';
import React from 'react';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-8  ">
          <div className="flex items-center gap-2">
            <Link href={'/'} className="flex items-center gap-2">
              <h1 className="text-xl font-bold">L. L. A. M. P.</h1>
            </Link>

            <span className="hidden text-muted-foreground md:inline-block">
              |
            </span>
            <span className="hidden text-muted-foreground md:inline-block">
              Lab of Light Assisted and Mechanochemical Practices 
            </span>
          </div>
          <nav className="hidden xl:flex items-center gap-6">
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:underline"
            >
              Projects & Patents
            </Link>

            <Link
              href="/people"
              className="text-sm font-medium hover:underline"
            >
              People
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium hover:underline"
            >
              Gallery
            </Link>
            <Link
              href="/problems-addressed"
              className="text-sm font-medium hover:underline"
            >
              Research
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline"
            >
              Contact
            </Link>
            {/* <Link
            href="#innovations"
            className="text-sm font-medium hover:text-primary"
          >
            Innovations
          </Link> */}
          </nav>

          <Menu className="h-6 w-6 md:hidden" />
        </div>
      </div>

      <div className={` h-16 px-6 md:px-8  lg:hidden  ${menu ? 'py-0' : ''} `}>
        <div className="container mx-auto flex h-16 items-center justify-between   ">
          <div className="flex select-none items-center gap-[50px] text-[16px]">
            <Link href={'/'} className="flex items-center gap-2">
              <h1 className="text-xl font-bold">Prof. Anuj Sharma</h1>
            </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className=" cursor-pointer text-black animate-in fade-in zoom-in dark:text-white"
                onClick={toggleMenu}
              />
            ) : (
              <div className="flex items-center gap-1">
                <Menu
                  className="text-black dark:text-white"
                  onClick={toggleMenu}
                />
              </div>
            )}
          </div>
        </div>
        {menu ? (
          <div className=" z-50 p-6 shadow-md animate-in slide-in-from-right w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
            <div className="flex flex-col gap-6 text-primary">
              <Link
                onClick={toggleMenu}
                href="/about"
                className="text-lg font-medium hover:underline"
              >
                About
              </Link>
              <Link
                onClick={toggleMenu}
                href="/projects"
                className="text-lg font-medium hover:underline"
              >
                Projects & Patents
              </Link>

              <Link
                onClick={toggleMenu}
                href="/people"
                className="text-lg font-medium hover:underline"
              >
                People
              </Link>
              <Link
                onClick={toggleMenu}
                href="/gallery"
                className="text-lg font-medium hover:underline"
              >
                Gallery
              </Link>
              
              <Link
                onClick={toggleMenu}
                href="/problems-addressed"
                className="text-lg font-medium hover:underline"
              >
                Research Areas
              </Link>

              <Link
                onClick={toggleMenu}
                href="/contact"
                className="text-lg font-medium hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
