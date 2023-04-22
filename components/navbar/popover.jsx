import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
export const NavPopover = ({name, content, slug, position = "left", width=250, onClick=null}) => {
const router= useRouter();
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={`flex items-center gap-2 text-sm   focus:outline-none  rounded ${router.asPath.includes(slug) ? "text-sage-accent2" : null} hover:text-sage-accent2 transition`}>
            {name} {open ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </Popover.Button>
          <Popover.Panel className={`absolute min-w-[${width}px] ${position}-0 mt-4 z-20 ring-1 ring-sage-main rounded`}>
            <ul className=" p-4 bg-sage-secondary rounded w-full overflow-hidden space-y-4">
              {content.map((data) => <li key={`popover-item-${data.name}`}  >
                    {onClick== null ? <Link href={data.slug} locale={router.locale} className={router.asPath.includes(data.slug) ? "text-sage-accent1" : "hover:text-sage-accent1"}>{data.name}</Link> : 
                        <button
                            className={`${router.locale === data.slug ? "font-bold text-sage-accent1": "hover:text-sage-accent1"} transition-colors`}
                         onClick={() => {
                         
                            router.push(`${router.asPath}`, undefined, {
                                locale: data.slug
                            })
                        }}>{data.name}</button>
                    }
              </li>)}
            </ul>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
