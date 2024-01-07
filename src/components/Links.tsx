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
      <div className="hidden md:flex items-center gap-5">
        {link.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`${
              pathName === link.path
                ? "bg-text text-bg rounded-full p-2" // Apply active styles
                : "" // Apply normal styles
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <button className=" md:hidden text-xl font-bold" onClick={() => setIsOpen((prev) => !prev)}>
        Menu
      </button>

      {isOpen && (
        <div className="flex flex-col items-center justify-center gap-10 absolute top-100 right-0 w-1/2 h-full bg-bg">
          {link.map((linkItem) => (
            <Link
              href={linkItem.path}
              key={linkItem.title}
              className={`${
                pathName === linkItem.path
                  ? "bg-text text-bg rounded-full p-2" // Apply active styles
                  : "" // Apply normal styles
              }`}
            >
              {linkItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
