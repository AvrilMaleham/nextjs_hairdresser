import Link from "next/link";

const Navbar = () => {
  return (
    <div>
       <Link href="/contact">Contact</Link>
       <Link href="/portfolio">Portfolio</Link>
       <Link href="/prices">Prices</Link>
    </div>
  )
}

export default Navbar
