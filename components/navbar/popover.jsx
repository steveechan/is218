import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export const NavPopover = ({name, content, slug}) => {
const router= useRouter();

  return (
    <Popover className="relative text-right">
      {({ open }) => (
        <>
          <Popover.Button className={`flex items-center gap-2  focus:outline-none  rounded ${router.asPath.includes(slug) ? "text-sage-accent2" : null} hover:text-sage-accent2 transition`}>
            {name} {open ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </Popover.Button>
          <Popover.Panel className="absolute min-w-[200px] right-0 mt-4 z-20">
            <ul className=" p-4 bg-sage-main rounded w-full overflow-hidden space-y-2">
              {content.map((data) => <li key={`popover-item-${data.name}`}  className={router.asPath.includes(data.slug) ? "text-sage-accent1" : "hover:text-sage-accent1"}>
                <Link href={data.slug} >{data.name}</Link>
              </li>)}
            </ul>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
