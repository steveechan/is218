import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { PageLayout } from "../../components/layout";


const BlogPage = ({blogData}) => {
    const {author, date, title} = blogData;
    return <PageLayout>
       <section className="container mx-auto  max-w-[65ch]  my-12 space-y-24 p-4">
        
     <div className="space-y-8 overflow-hidden">
        <h1 className="text-4xl font-bold">{title}</h1>
          <div className=" border-sage-main/50 mx-auto">
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
            <img src="/images/pattern.png" className="absolute object-cover -z-10 top-[0] right-0 h-[250px] w-screen opacity-25 select-none" />
     </div>
       
        <div className="prose prose-invert mx-auto" dangerouslySetInnerHTML={{__html: blogData.contentHtml}}></div>
       </section>
    </PageLayout>
}

export default BlogPage;

export async function getStaticPaths({locales}) {

  const localPaths = getAllPostIds();
  let paths = [];
    localPaths.map((path) => {
        for(const locale of locales) {
            paths.push({
                ...path, locale
            })
        }
    })

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async ({ locale,params }) => {
  const blogData = await getPostData(params.id);
  
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      blogData
    },
  };
};
