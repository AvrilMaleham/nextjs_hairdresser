"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
      <div className="hidden items-center gap-5 md:flex">
        {link.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`${
              pathName === link.path
                ? "rounded-full bg-textCol p-2 text-backgroundCol" // Apply active styles
                : "" // Apply normal styles
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <button
        className=" text-xl font-bold md:hidden"
        onClick={() => setIsOpen(true)}
      >
        Menu
      </button>

      {/* Sidebar menu */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full" //slide in and out
        } bg-backgroundCol/50 fixed right-0 top-0 h-full w-screen backdrop-blur-sm transition-all md:hidden`} //blur background
      >
        <div className="absolute right-0 top-0 flex h-full w-1/2 flex-col items-center justify-center gap-10 bg-backgroundCol md:hidden">
          {link.map((linkItem) => (
            <Link
              href={linkItem.path}
              key={linkItem.title}
              className={`${
                pathName === linkItem.path
                  ? "rounded-full bg-textCol p-2 text-backgroundCol" // Apply active styles
                  : "" // Apply normal styles
              }`}
            >
              {linkItem.title}
            </Link>
          ))}
        </div>

        <button
          className="absolute right-5 top-5 z-50 m-8 text-xl font-bold md:hidden"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Links;
