import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageLayout } from "../../components/layout";
import { MetaHeader } from "../../components/common/metaHeader";
import Link from "next/link";
import { AiOutlineSwapRight } from "react-icons/ai";
import { getSortedPostsData } from "../../lib/posts";

const BlogCard = ({ title, description, author, slug, date }) => {
  return (
    <div className="w-full h-auto  rounded  relative bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-sage-main via-sage-main/5 to-sage-main/25 ">
      <article className="min-h-[250px]">
        <img
          src="/images/pattern2.png"
          className=" absolute w-full h-full   object-cover opacity-20 -z-10"
        />
        <div className="p-4 space-y-2">
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="text-sage-accent3/80 line-clamp-4 min-h-[100px]">
            {description}
          </p>
          <div className="py-2">
            <Link
              href={`/blog/${slug}`}
              className=" flex items-center gap-2 group hover:text-sage-accent1 transition-colors"
            >
              Read blog{" "}
              <AiOutlineSwapRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
      
          <div className="border-t pt-4 border-sage-main/50 ">
            <div className="flex gap-2 items-center">
              <div className=" w-12 h-12 rounded-full bg-sage-main"></div>
              <div>
                <h5 className="capitalize">{author}</h5>
                <p className="text-sm">
                  {new Intl.DateTimeFormat('en-US',{dateStyle:"full"}).format(new Date(date))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

const BlogHomePage = ({ blogData }) => {

  return (
    <>
      <MetaHeader title="Blogs" />
    <div className="p-4">
          <PageLayout>
        <p>Blogs</p>
        <h1 className="text-5xl max-w-4xl leading-normal">Get Educated with Our Informative Blog Content</h1>
        <section className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-12 w-full">
          {blogData.map((blog) => (
            <BlogCard {...blog} key={blog.title} />
          ))}
        </section>
      </PageLayout>
    </div>
    </>
  );
};

export default BlogHomePage;
export const getStaticProps = async ({ locale }) => {
  const blogData = getSortedPostsData();
  
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      blogData
    },
  };
};
