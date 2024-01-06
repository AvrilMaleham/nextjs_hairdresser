import Link from "next/link";

const Links = () => {

  const link = [
    { 
        title: "Contact ", 
        path: "/contact" 
    },
    { 
        title: "Portfolio", 
        path: "/portfolio" 
    },
    { 
        title: "Prices", 
        path: "/prices" 
    },
  ];

  return (
  <div>
    {link.map((link => (
        <Link href={link.path} key={link.title}>{link.title}</Link>
    )))}
   </div>
    );
};

export default Links;