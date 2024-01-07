import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-sm">Not Found</h2>
      <p className="text-sm">Sorry, the page you are looking for does not exist.</p>
      <Link className="text-sm" href="/"> Return Home </Link>
    </div>
  );
};

export default NotFound;
