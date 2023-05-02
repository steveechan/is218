import Link from "next/link";
import { useRouter } from "next/router";
import { NavPopover } from "./popover";
import { AiOutlineSwapRight, AiOutlineMenu, AiOutlineGlobal } from "react-icons/ai";
import { BsArrowUpRight, BsGlobe, BsGlobe2} from 'react-icons/bs'
import { useState } from "react";
import { NavCollapsible } from "./collapsible";
import { navData } from "../../lib/data/navdata";
import { useTranslation } from "next-i18next";


export default function Navbar() {
  const { asPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const {t} = useTranslation();
  const navName = t("common:navKeys", {returnObjects: true});
   
  return (
    <nav className="w-full border-b border-b-sage-main/20">
      <div className=" mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex">
        <Link href="/" className="text-sm font-bold mr-8">
          MyWebclass.org
        </Link>
        <ul className=" items-center space-x-4 text-sm 2xl:flex xl:flex lg:flex  hidden">
   
          {navData.map((data, index) => data.isCollapsible ? <NavPopover name={navName[index]} content={data.children} slug={data.slug} key={`main-${data.name}`} /> : 
            <Link
              href={data.slug}
              className={` ${
                asPath.includes(`/${navName[index].toLowerCase()}`)
                  ? "text-sage-accent2"
                  : null
              } hover:text-sage-accent2 transition-colors`}
              key={`main-${data.name}`}
            >
              {navName[index]}
            </Link>
          )}
        </ul>
      </div>
      <div className="2xl:flex xl:flex lg:flex items-center gap-4  hidden">
        <Link href={"/contact-us"} className="text-xs flex items-center gap-2 bg-sage-main px-4 py-3 rounded-full">
      {t("common:navCallToAction")}
        <AiOutlineSwapRight />
        </Link>
        <span>|</span>
        <div>
            <NavPopover name={<BsGlobe2 className="w-5 h-5 text-sage-accent1" />} content={[{
                slug: `en`,
                name:"EN"
            },{
                slug:`es`,
                name:"ES"
            }]} slug={"/"} key={`main-${"en"}`} position="right" width={25}onClick={"switch"} />
        </div>
      </div>

        <div className="2xl:hidden xl:hidden lg:hidden block relative z-20">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <AiOutlineMenu className="w-5 h-5" />
          </button>

          {isOpen ? (
            <>
              <div className="absolute right-0 bg-sage-secondary ring-2 ring-sage-main/50 shadow-lg  rounded  text-right flex flex-col mt-2 min-w-[250px]">
                {/* <NavPopover /> */}
                
                {navData.map((data) => data.isCollapsible ? <NavCollapsible name={data.name} contents={data.children} key={data.name} /> : <Link href={data.slug} className="text-sm mx-1 my-1 rounded p-3 text-left hover:bg-sage-main flex items-center justify-between " key={data.name}>{data.name}
                <BsArrowUpRight />
                </Link>)}
              </div> 
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

