import Link from "next/link";
import { useRouter } from "next/router";
import { NavPopover } from "./popover";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { NavCollapsible } from "./collapsible";
import { navData } from "./navdata";

export default function Navbar() {
  const { asPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full border-b border-b-sage-main/20">
      <div className=" mx-auto p-6 flex justify-between items-center">
        <Link href="/" className="text-sm font-bold">
          MyWebclass.org
        </Link>
        <ul className=" items-center space-x-4 text-sm 2xl:flex xl:flex lg:flex  hidden">
   
          {navData.map((data) => data.isCollapsible ? <NavPopover name={data.name} content={data.children} slug={data.slug} key={`main-${data.name}`} /> : 
            <Link
              href={data.slug}
              className={` ${
                asPath.includes(`/${data.name}`)
                  ? "text-sage-accent2  "
                  : null
              } hover:text-sage-accent2 transition-colors`}
              key={`main-${data.name}`}
            >
              {data.name}
            </Link>
          )}
        </ul>
        <div className="2xl:hidden xl:hidden lg:hidden block relative z-20">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <AiOutlineMenu className="w-5 h-5" />
          </button>

          {isOpen ? (
            <>
              <div className="absolute right-0 bg-sage-main p-4 rounded space-y-4 text-right flex flex-col mt-2">
                {/* <NavPopover /> */}
                
                {navData.map((data) => data.isCollapsible ? <NavCollapsible name={data.name} contents={data.children} key={data.name} /> : <Link href="/" className="text-sm  text-right hover:text-sage-accent1" key={data.name}>{data.name}</Link>)}
              </div> 
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

