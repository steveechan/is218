import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MetaHeader } from "../../components/common/metaHeader";
import { PageLayout } from "../../components/layout";
import { webinarsAndWorkshops } from "../../lib/data/webinarsAndWorkshops";


const VideoCardItem = ({videoUrl,videoTitle, title, description, outcomes,tag}) => {

return  <div className="w-full h-auto max-w-2xl  rounded-lg p-1 space-y-8">
                <iframe
                  src={`${videoUrl}?modestbranding=1`}
                  title={videoTitle}
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="w-full h-[300px] rounded"
                  allowfullscreen
                ></iframe>
                <div className="w-auto space-y-4 ">
                    <p className="text-xs capitalize px-4 py-1 bg-sage-main w-fit rounded-full">{tag}</p>
                  <h4 className="text-2xl max-w-md font-bold">
                    {title}
                  </h4>
                  <p className=" leading-relaxed min-h-[150px]">
                    {description}
                  </p>
                  <div className=" space-y-4">
                    <h4 className="text-lg font-bold">✨ What you'll learn </h4>
                    <ol className=" space-y-2">
                       {outcomes.map((outcome, index) => <ListItem key={`outcome-${index}`}>
                        <p>{outcome}</p>
                       </ListItem>)}
                    </ol>
                  </div>
                </div>
              </div>
}


const ListItem = ({children}) => {

    return   <li className="bg-sage-main p-2 rounded">{children}</li>
}

const WebinarsAndWorkshipsPage = () => {
  return (
    <>
      <MetaHeader
        title="Webinars and Workshops"
        description="Discover our webinars and workshops on Agile and Lean methodologies! Join our expert speakers and learn how to streamline your processes, increase efficiency, and deliver better results. Our online events cover a range of topics, including Scrum, Kanban, Lean Six Sigma, and more. Whether you're a software developer, a project manager, or a business leader, our sessions provide practical tips, real-world examples, and hands-on exercises to help you succeed. Explore our upcoming events and take the first step towards mastering Agile and Lean methodologies today!"
      />
      <PageLayout>
        <div className="p-4 space-y-8">
        <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl text-4xl font-black leading-relaxed mx-auto text-center">
          Webinars and Workshops
        </h1>
        <p className="text-center max-w-2xl mx-auto 2xl:text-base xl:text-base lg:text-base md:text-base text-sm text-neutral-300">
          Streamline your workflows with our Agile and Lean webinars and
          workshops. Join our experts and learn the latest methodologies and
          best practices to achieve better results. Sign up now and become an
          Agile and Lean champion!
        </p>
        </div>
        <section className="mt-12 px-4">
          <div className="mt-">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))] gap-8">
            {webinarsAndWorkshops.map((item) => <VideoCardItem {...item} key={item.title} /> )}
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default WebinarsAndWorkshipsPage;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
