"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/create-post", label: "Create Post" },
];
const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <header className="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
      <Link
        href="/"
        className="flex items-center whitespace-nowrap text-2xl font-black"
      >
        <span className="mr-2 w-8"></span>
        spline
      </Link>

      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
      >
        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
          {navLinks.map((link, index) => (
            <li key={index} className="lg:mr-12">
              <Link
                className={`rounded  text-gray-700 transition ${
                  pathName === link.href ? "font-bold" : "font-normal"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="mt-4 w-full lg:hidden" />
      </nav>
    </header>
  );
};

export default Header;
