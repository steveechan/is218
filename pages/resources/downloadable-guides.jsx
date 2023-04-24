import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageLayout } from "../../components/layout";
import { MetaHeader } from "../../components/common/metaHeader";
import { downloadableGuides } from "../../lib/data/downloadableGuides";
import { BsArrowRight, BsDownload } from "react-icons/bs";

const DownloadableGuide = ({ title, year, description, link, index }) => {
  return (
    <div>
      <ul className="flex flex-col gap-12">
        <li>
          <span className="text-xs">
            {index + 1 > 9 ? index + 1 : `0${index + 1}`}
          </span>
          <h3 className="text-4xl">{title}</h3>
        </li>
        <li className="border-b border-b-sage-main pb-4 w-full">
          <div className="flex justify-between flex-wrap items-start">
            <h4 className="text-sm">Description</h4>
            <p className="max-w-xl text-lg line-clamp-4">{description}</p>
          </div>
        </li>
        <li className="border-b border-b-sage-main pb-12 w-full">
          <div className="flex justify-between flex-wrap">
            <h4>Published Year</h4>
            <p className="max-w-xl text-lg w-full">{year}</p>
          </div>
        </li>
        <li className=" pb-4 w-full">
          <div className="flex justify-end">
            <a
              className="flex items-center gap-12 group hover:text-sage-accent1 text-sm max-w-xl w-full"
              href={link}
                rel="noopener noreferrer"
          target="_blank"
            >
              Download{" "}
              <BsArrowRight className="group-hover:translate-x-4 transition-transform" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

const DownloadableGuidesPage = () => {
  return (
    <>
      <MetaHeader
        title="Downloadable Guides"
        description="Access practical and informative guides on a wide range of topics with our Downloadable Guides page. From how-to manuals to expert advice, download and save our guides for offline use and refer to them whenever you need them."
      />
      <PageLayout>
        <div className="flex items-start flex-wrap">
          <div className="max-w-lg w-full  p-4">
            <h1 className="text-4xl font-black   leading-normal mx-auto ">
              Downloadble Guides
            </h1>
          </div>
          <section className=" mx-auto  p-4 space-y-24 max-w-4xl">
            {downloadableGuides.map((guide, index) => (
              <DownloadableGuide {...guide} index={index} key={guide.title} />
            ))}
          </section>
        </div>
      </PageLayout>
    </>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default DownloadableGuidesPage;
