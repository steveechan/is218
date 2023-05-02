import Link from "next/link";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import SubscribeForm from "../mailchimp";
import { useTranslation } from "next-i18next";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="space-y-2">
      <h4 className="text-xs text-sage-accent3/80">{title}</h4>
      <ul className="text-sm space-y-2">
        {links.map((link) => <li className="hover:text-sage-accent2 transition-colors" key={link.title}>
          <Link href={link.link}>{link.title}</Link>
        </li>)}
      </ul>
    </div>
  );
};

export default function Footer() {
  const { t } = useTranslation("common");
  const footerItems = t("footerItems", { returnObjects: true })

  return (
    <div className="w-full border-t border-t-sage-main/25 p-4 mt-24">
      <footer className="container mx-auto my-8 2xl:flex xl:flex lg:flex block items-start justify-between 2xl:space-y-0 xl:space-y-0 lg:space-y-0 space-y-6">
       {footerItems.map((item,index) => <FooterColumn {...item} key={`${item.title}-column-${index}`} />)}

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
      <div className="border-t w-full container mx-auto border-t-sage-main/50">
        <p className="my-4 text-xs text-sage-main font-semibold ">MyWebclass.org &copy; 2023.</p>
      </div>
    </div>
  );
}

