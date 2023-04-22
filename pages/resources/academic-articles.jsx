import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageLayout } from "../../components/layout";
import Head from "next/head";
import { BsArrowUpRight } from "react-icons/bs";
import { academicArticles } from "../../lib/data/academicArticles";
import { MetaHeader } from "../../components/common/metaHeader";

const ArticleCard = ({ title, link }) => {
  return (
    <div>
      <h3 className="text-4xl font-normal leading-loose    w-fit">
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="w-fit hover:underline underline-offset-[10px]"
        >
          {title}
        </a>
      </h3>

      <div>
        <a
          className="flex gap-2 items-center mt-4 underline underline-offset-[10px]"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          Read Article <BsArrowUpRight />
        </a>
      </div>
    </div>
  );
};

const ArticleLayout = ({ article }) => {
  return (
    <article className="flex justify-between flex-wrap gap-4 border-t border-t-sage-main py-20 px-4">
      <p className="text-2xl max-w-sm ">{article.category}</p>
      <div className="max-w-4xl space-y-24">
        {article.articles.map((data) => (
          <ArticleCard {...data} key={data.title} />
        ))}
      </div>
    </article>
  );
};

const AcademicArticlesPage = () => {
  return (
    <>
      <MetaHeader
        title="Academic Articles"
        description="Explore a vast collection of scholarly works on various topics with our Academic Articles page. From peer-reviewed research papers to in-depth analyses, find the latest and most relevant academic literature in one convenient location."
      />
      <PageLayout>
        <h1 className="text-4xl font-black leading-normal mx-auto">
          Academic Articles
        </h1>
        <section className="mt-24">
          {academicArticles.map((article) => (
            <ArticleLayout article={article} key={article.category} />
          ))}
        </section>
      </PageLayout>
    </>
  );
};

export default AcademicArticlesPage;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
