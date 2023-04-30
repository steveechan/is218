import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MetaHeader } from "../components/common/metaHeader";
import { PageLayout } from "../components/layout";
import Link from "next/link";
import { successStories } from "../lib/data/successStories";
import { AiOutlineSwap, AiOutlineSwapRight } from "react-icons/ai";


const SuccessStoriesCard = ({author, quote, link}) => {
    return     <div className="  p-6  bg-sage-main/10 relative rounded overflow-hidden  border border-sage-main flex flex-col justify-between w-full">
                    <img src="/images/pattern2.png" className="absolute -z-10 top-0 left-0 opacity-50 blur-sm w-full h-full" />
                    <p className="mb-4 italic">{author}</p>
                    <p className="text-xl ">{`"${quote}"`}</p>
                   <div className="mt-4">
                     <a href={link}   rel="noopener noreferrer"
          target="_blank" className="mt-4 flex items-center gap-2 group hover:text-sage-accent1">View Case Study
            <AiOutlineSwapRight className="group-hover:translate-x-2 transition-transform" />
          </a>

                   </div>
         
                </div>
}

const SuccessStoriesPage = () => {

    return <>
        <MetaHeader title="Success Stories" />
        <PageLayout>
            <div className="max-w-4xl mx-auto text-center space-y-4">
                    <p className="text-sage-accent1">Success Stories</p>
                  <h1 className="text-4xl leading-normal text-center">Integrating Agile and Lean Principles in Education: How Schools are Adapting to Meet the Demands of the 21st Century</h1>
            </div>
            <section className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(clamp(290px,500px,100%),1fr))] gap-4">
                    {successStories.map((story, index) => <SuccessStoriesCard {...story} key={`story-card-${index}`} /> )}
            </section>
        </PageLayout>
    </>
}

export default SuccessStoriesPage;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
