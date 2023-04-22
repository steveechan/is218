import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Link from "next/link";
export const NavCollapsible = ({name, contents}) => {
    const [open, setOpen] = useState(false);

    return <Collapsible.Root open={open} onOpenChange={setOpen}>
        <div  className="flex  text-sm flex-col min-w-[200px] items-start mx-2 mb-2">
              <Collapsible.Trigger asChild className={`${!open ? "hover:bg-sage-main" : "bg-sage-main"} rounded-t px-2 py-3 w-full`}>
             
                    <button className="flex gap-2 items-center justify-between ">
                    <span >
                        {name}
                    </span>
            
                    <div >{open ? <AiFillCaretUp /> : <AiFillCaretDown />}</div>
                      </button>
           
            </Collapsible.Trigger>
          
            <Collapsible.Content className=" text-left  px-4 bg-sage-main w-full rounded-b">
                {contents.map((content,index) =>    <div key={`${name}-${content.name}-${index}`} className="hover:bg-sage-main transition-colors pt-2 pb-3">
                    <Link href={content.slug}>{content.name}</Link>
                </div>)}
            </Collapsible.Content>
        </div>
    </Collapsible.Root>
}