import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MetaHeader } from "../components/common/metaHeader";
import { PageLayout } from "../components/layout";

const TextCard = ({ children, main = false}) => {
  return (
    <div className={`${!main ? " bg-sage-main/25" : "bg-sage-secondary"} p-6 rounded`}>
      <p className="leading-relaxed">{children}</p>
    </div>
  );
};

const AgileAndLeanPages = () => {
  return (
    <>
      <MetaHeader
        title="Agile and Lean Principles"
        description="Learn about Agile and Lean principles, two popular methodologies for project management and software development. Discover how these approaches prioritize customer satisfaction, teamwork, and continuous improvement, and how they can help organizations increase efficiency, reduce waste, and deliver value to customers. Explore the key concepts and benefits of Agile and Lean, and find resources to help you implement these methodologies in your own projects."
        keywords="Agile, Lean, project management, software development, customer satisfaction, teamwork, continuous improvement, efficiency, waste reduction, value delivery, implementation."
      />

      <main>
        <div className="container mx-auto">
        <div className="space-y-4 min-h-[100vh] flex items-center justify-between flex-wrap relative ">
          <div className="max-w-xl space-y-4 relative">
            <h1 className="text-7xl leading-relaxed">
              Agile and Lean Principles in Education
            </h1>
            <p>
               Agile and Lean principles in education can result in a more responsive and student-centered learning environment, while also increasing transparency and reducing waste.
            </p>
          </div>
          <img src="/images/pattern.png" className=" 2xl:block xl:block hidden w-3/6 " />
        </div>
        </div>
        <section className="bg-sage-main/20 p-4">
        <div className="container mx-auto p-4">
              <div className=" p-4 space-y-4 flex justify-between flex-wrap items-center">
            <img
              src="/images/agile.png"
              className=" object-contain 2xl:w-2/6 xl:w-2/6 lg:w-2/6 md:w-2/6 w-full"
            />
            <div className="max-w-2xl space-y-8">
              <h2 className="text-4xl leading-loose">
                Agile Methodology
              </h2>
              <div className="space-y-4">
                <TextCard main={true}>
                  <span className="font-bold">Prioritize student needs:</span>{" "}
                  In Agile, the customer's needs are prioritized. Similarly, in
                  education, student needs should be the top priority.
                </TextCard>
              <TextCard main={true}>
                  <span className="font-bold">Embrace flexibility:</span> Agile
                  methodology emphasizes being flexible and adapting to change.
                  Educators can incorporate this principle by being open to new
                  teaching methods and adjusting their approach as needed.
                </TextCard>
               <TextCard main={true}>
                  <span className="font-bold">Encourage collaboration:</span>{" "}
                  Agile teams work together to achieve a common goal. In
                  education, teachers can encourage collaboration among students
                  to enhance learning.
                </TextCard>
                <TextCard main={true}>
                  <span className="font-bold">
                    Focus on continuous improvement:
                  </span>{" "}
                  Agile teams continuously seek ways to improve their processes.
                  Educators can apply this principle by seeking feedback and
                  implementing changes to improve their teaching methods.
                </TextCard>
                <TextCard main={true}>
                  <span className="font-bold">
                    Emphasize rapid prototyping:
                  </span>{" "}
                  Agile teams use rapid prototyping to refine ideas quickly,
                  educators can do the same by using formative assessments.
                  Teachers can promote transparency by regularly updating
                  parents and students on progress.
                </TextCard>
               <TextCard main={true}>
                  <span className="font-bold">
                    Value individuals and interactions: 
                  </span>{" "}
                 Agile values individuals and their interactions over processes and tools. In education, teachers can value each student as an individual and foster positive interactions between students to enhance learning.
                </TextCard>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className="mt-24 p-4 space-y-24 container mx-auto">
          
           <div className=" p-4 space-y-4 flex justify-between flex-wrap items-center flex-row-reverse">
            <img
              src="/images/lean.png"
              className=" object-contain 2xl:w-2/6 xl:w-2/6 lg:w-2/6 md:w-2/6 w-full"
            />
            <div className="max-w-2xl space-y-8">
              <h2 className="text-4xl leading-loose">
                Lean Methodology
              </h2>
              <div className="space-y-4">
                <TextCard>
                  <span className="font-bold">Value:</span>{" "}
                Define what is valuable in education, such as student learning outcomes, and focus on delivering that value while eliminating non-value added activities.
                </TextCard>
                <TextCard>
                  <span className="font-bold">Flow:</span> Optimize the flow of work and information in the education process to minimize delays, errors, and waste.
                </TextCard>
                <TextCard>
                  <span className="font-bold">Pull:</span>{" "}
                  Align the pace of education to the student's ability and learning needs to minimize unnecessary activities, such as repeating lessons, and to avoid overburdening students.
                </TextCard>
                <TextCard>
                  <span className="font-bold">
                    Perfection:
                  </span>{" "}
                 Continuously improve the education process by identifying areas of waste, inefficiency, and inconsistency and finding ways to eliminate them
                </TextCard>
                <TextCard>
                  <span className="font-bold">
                    Respect for people:
                  </span>{" "}
               Foster a culture of respect for all stakeholders in the education process, including students, teachers, administrators, and parents, by involving them in decision-making, providing them with the necessary resources, and creating an environment of trust and collaboration.
                </TextCard>
              
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AgileAndLeanPages;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
