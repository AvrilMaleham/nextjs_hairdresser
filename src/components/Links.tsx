"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

interface LinkItem {
  title: string;
  path: string;
}

const link: LinkItem[] = [
  {
    title: "Contact ",
    path: "/contact",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Prices",
    path: "/prices",
  },
];

const Links = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  return (
    <div>
      {/* Top menu */}
      <div className="hidden md:flex items-center gap-5">
        {link.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`${
              pathName === link.path
                ? "bg-textCol text-backgroundCol rounded-full p-2" // Apply active styles
                : "" // Apply normal styles
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <button
        className=" md:hidden text-xl font-bold"
        onClick={() => setIsOpen(true)}
      >
        Menu
      </button>

      {/* Sidebar menu */}

      {/* Blur background */}
      {/* <div className={clsx("fixed h-full w-screen bg-backgroundCol/50 backdrop-blur-sm top-0 right-0 translate-x-[1000px] transition-all md:hidden",
        isOpen && "-translate-x-0")}> */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-[1000px]"
        } fixed h-full w-screen bg-backgroundCol/50 backdrop-blur-sm top-0 right-0 transition-all md:hidden`}
      >
        <div className="flex flex-col items-center justify-center gap-10 absolute top-0 right-0 w-1/2 h-full bg-backgroundCol md:hidden">
          {link.map((linkItem) => (
            <Link
              href={linkItem.path}
              key={linkItem.title}
              className={`${
                pathName === linkItem.path
                  ? "bg-textCol text-backgroundCol rounded-full p-2" // Apply active styles
                  : "" // Apply normal styles
              }`}
            >
              {linkItem.title}
            </Link>
          ))}
        </div>

        <button
          className="text-xl font-bold z-50 absolute m-8 right-5 top-5 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Links;
