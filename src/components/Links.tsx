"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const link = [
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

  const pathName = usePathname();

  return (
    <div className="flex items-center gap-5">
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
  );
};

export default Links;
