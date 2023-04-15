import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Link from "next/link";
export const NavCollapsible = ({name, contents}) => {
    const [open, setOpen] = useState(false);

    return <Collapsible.Root open={open} onOpenChange={setOpen}>
        <div  className="flex gap-2 text-sm flex-col min-w-[200px] items-end">
              <Collapsible.Trigger asChild>
             
                    <button className="flex gap-2 items-center">
                    <span className={`${open ? 'font-bold' : 'font-semibold'}`}>
                        {name}
                    </span>
            
                    <div >{open ? <AiFillCaretUp /> : <AiFillCaretDown />}</div>
                      </button>
           
            </Collapsible.Trigger>
          
            <Collapsible.Content className=" text-right space-y-2 ">
                {contents.map((content,index) =>    <div key={`${name}-${content.name}-${index}`}>
                    <Link href={content.slug}>{content.name}</Link>
                </div>)}
            </Collapsible.Content>
        </div>
    </Collapsible.Root>
}