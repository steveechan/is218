import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { asPath } = useRouter();
  return (
    <nav className="w-full ">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link
          href="/"
          className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-400 to-indigo-100 text-xl font-bold"
        >
          MyWebclass.org
        </Link>
        <ul className="flex items-center gap-4 text-sm">
          <li>
            <Link
              href="/"
              className={` ${
                asPath.includes("/")
                  ? "font-bold text-white"
                  : "text-neutral-300 hover:text-white"
              } transition-colors`}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              href="/courses"
              className={` ${
                asPath.includes("courses")
                  ? "font-bold text-white"
                  : "text-neutral-300 hover:text-white"
              } transition-colors`}
            >
              Courses
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
