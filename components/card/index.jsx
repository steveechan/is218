import Image from "next/image";
import Link from "next/link";
import { AiFillCaretRight, AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Card({ title, description, link }) {
  const router = useRouter();

  return (
    <div className=" min-h-[250px] shadow rounded bg-neutral-800 ">
      <div className="p-1">
        <article className="w-full min-h-[250px]  rounded relative">
          <Image
            src="https://raw.githubusercontent.com/NJIT-WIS/project-2-george-s-prompt-engineers/main/public/images/cardImage.jpg?token=GHSAT0AAAAAACAPJYAURHLKDZHKNE6PASSQZBM6MTA"
            alt="nice"
            fill
            className="rounded-t w-full object-cover rounded"
          />
        </article>
      </div>
      <div className="p-4 w-full min-h-[200px] flex flex-col justify-between">
        <h4 className="text-xl font-semibold line-clamp-1">{title}</h4>

        <p className="text-sm text-neutral-300 line-clamp-3  rounded">
          {description}
        </p>

        <Link href={link} className="w-full">
          <p className="px-4 py-2 text-indigo-50 rounded bg-indigo-800 text-xs uppercase tracking-wider font-semibold w-full hover:bg-indigo-700 transition-colors border border-indigo-700 flex items-center justify-between">
            Get Started
            <AiOutlineArrowRight className="w-4 h-4" />
          </p>
        </Link>
      </div>
    </div>
  );
}
