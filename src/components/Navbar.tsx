import Links from "./Links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold">Logo</Link>
        <Links />
    </div>
  )
}

export default Navbar
