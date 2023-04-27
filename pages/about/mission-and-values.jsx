import { AiOutlineSwapRight } from "react-icons/ai";
import { PageLayout } from "../../components/layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CoreValueCard } from "../../components/card/coreValueCard";
import { MetaHeader } from "../../components/common/metaHeader";


const coreValues = [{
    title: "Innovation",
    description: "MyWebClass.org is committed to revolutionizing education by incorporating Agile and Lean principles into the classroom. We strive to be at the forefront of this transformation and are always looking for new and innovative ways to improve educational practices."
}, 
{
    title: "Collaboration",
    description: "MyWebClass.org believes that collaboration is key to success in the AI-driven world. We collaborate with schools and educators to foster a culture of continuous improvement, adaptability, and collaboration. We believe that by working together, we can create an environment where students are better prepared for the future."
}, 
{
    title: "Adaptability",
    description: "MyWebClass.org understands the importance of adaptability in the face of rapid technological change. We incorporate Agile and Lean principles in the classroom to cultivate resilience and adaptability in our students. We believe that adaptability is a crucial skill for success in the AI-driven world."
}, 
{
    title: "Continuous Improvement",
    description: "MyWebClass.org is committed to continuous improvement. We conduct research on effective strategies, develop resources and tools, and offer professional development opportunities to educators. We believe that by continuously improving our practices, we can better prepare students for the challenges and opportunities of the AI-driven world."
}, 
{
    title: "Student-Centered Learning",
    description: "MyWebClass.org is dedicated to student-centered learning. We believe that every student has unique strengths and challenges, and we strive to create an environment where all students can thrive. We use Agile and Lean principles to foster creativity, adaptability, and collaboration in our students, preparing them for success in the AI-driven world"
}, 


]




const MissionAndValues = () => {
  return (
  <>
   <MetaHeader
        title="Mission and Values"
        description={"Revolutionizing education by incorporating Agile and Lean principles into the classroom, fostering a culture of continuous improvement, collaboration, and adaptability"}
    />
  <div className="bg-sage-secondary">
    <PageLayout>
      <section className="w-full p-4 mx-auto space-y-24">
        <div>
          <h1 className="text-4xl font-bold">Mission and Values</h1>
        </div>
        <div className="space-y-12">
          <div className="flex justify-between flex-wrap gap-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <div className="max-w-4xl">
              <p className="text-2xl   leading-loose">
                <span className="text-sage-accent2">Revolutionizing</span>{" "}
               education by incorporating Agile and Lean principles into the classroom, fostering a culture of continuous improvement, collaboration, and adaptability
              </p>
              <button className="mt-4 flex items-center gap-2 text-sm text-sage-accent2">
                Volunteer Now <AiOutlineSwapRight />{" "}
              </button>
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-4">
            <h2 className="text-2xl font-semibold">Our Values</h2>
            <div className="max-w-4xl space-y-8">
              <p className="text-2xl   leading-loose">
                At our company, we prioritize our values and rely on strong
                partnerships, affiliations, and a talented team with the
                necessary skills and experience to achieve our mission.
              </p>
          
            </div>
          </div>
        </div>
       
      </section>
    </PageLayout>
    </div>
        <section className="p-4 bg-sage-main/25">
         <div className="space-y-12 container mx-auto py-12">
            <h4 className="text-2xl font-bold">Our Core Values</h4>
              <ul className=" grid 2xl:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] grid-cols-1 gap-12">
                    {coreValues.map(values => <CoreValueCard {...values} key={values.title + "-items"} />)}
              </ul>
        </div>
        </section>
    </>
  );
};

export default MissionAndValues;

export const getStaticProps= async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})