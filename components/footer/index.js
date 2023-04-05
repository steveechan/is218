import Link from "next/link";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import SubscribeForm from "../mailchimp";

export default function Footer() {
  return (
    <div className="w-full bg-neutral-800 p-4">
      <footer className="container mx-auto my-8 2xl:flex xl:flex lg:flex block items-start justify-between 2xl:space-y-0 xl:space-y-0 lg:space-y-0 space-y-6">
        <div className="space-y-2">
          <h4 className="text-xs">About Us</h4>
          <ul className="text-neutral-400 text-sm ">
            <li className="hover:text-neutral-200 transition-colors">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="hover:text-neutral-200 transition-colors">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs">Share on Social Media</h4>
          <ul className="flex space-x-2 text-neutral-400">
            <li className="hover:text-neutral-200 transition-colors">
              <Link href="https://www.facebook.com/NewJerseyInstituteofTechnology/">
                <AiFillFacebook className="w-5 h-5" />
              </Link>
            </li>
            <li className="hover:text-neutral-200 transition-colors">
              <Link href="https://twitter.com/njit">
                <AiFillTwitterCircle className="w-5 h-5" />
              </Link>
            </li>
            <li className="hover:text-neutral-200 transition-colors">
              <Link href="https://www.linkedin.com/school/165198/">
                <AiFillLinkedin className="w-5 h-5" />
              </Link>
            </li>
          </ul>
        </div>
        <SubscribeForm />
      </footer>
    </div>
  );
}
