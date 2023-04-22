import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export const NavPopover = ({name, content, slug}) => {
const router= useRouter();

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={`flex items-center gap-2   focus:outline-none  rounded ${router.asPath.includes(slug) ? "text-sage-accent2" : null} hover:text-sage-accent2 transition`}>
            {name} {open ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </Popover.Button>
          <Popover.Panel className="absolute min-w-[250px] left-0 mt-4 z-20 ring-1 ring-sage-main rounded">
            <ul className=" p-4 bg-sage-secondary rounded w-full overflow-hidden space-y-4">
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
