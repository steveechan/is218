import { TeamCard } from "../../components/card/teamCard";
import { MetaHeader } from "../../components/common/metaHeader";
import { PageLayout } from "../../components/layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const teamMembers = [{
    memberName:"Stephen Chan",
    position: "Software Engineer",
    description: "Stephen Chan is a highly skilled software engineer with expertise in developing cutting-edge applications using various programming languages and frameworks. With a strong focus on AI-driven software development, Stephen enjoys tackling complex problems and devising efficient solutions that push the boundaries of what is possible in the field."
    }, 
    {
    memberName:"Felipe Furtado",
    position: "UI/UX Designer",
    description: "Felipe Furtado is a talented UI/UX designer with a passion for creating visually stunning and intuitive digital experiences. With a strong focus on user-centered design, Felipe enjoys tackling complex design challenges and finding creative solutions that delight users. As an experienced instructor, Felipe is dedicated to sharing his expertise with aspiring designers and helping them master the art of UI/UX design. Students under his guidance can expect to learn the latest design trends and industry practices, as well as gain valuable insights into the design process and user psychology."
    
},
{
    memberName:"Keith Williams",
    position: "Full-Time Instructor",
    description: "Keith Williams is a legendary instructor who is widely regarded as the greatest of all time (GOAT) in his field. With a career spanning several decades, Keith has a wealth of experience and knowledge that he brings to every class he teaches. As an instructor, Keith has a unique ability to break down complex concepts into simple and easy-to-understand terms, making even the most challenging topics accessible to students. He is known for his engaging teaching style, infectious enthusiasm, and unwavering commitment to his students' success."
},{
    memberName:"Tisha Madhok",
    position: "Fullstack Engineer",
    description: "Tisha is a very good fullstack engineer"
}
]




const MeetOurTeam = () => {
  return (
  <>
      <MetaHeader
        title="Meet our team"
        description={"Meet our team of creators, designers, and problem solvers"}
    />
    <PageLayout>
      <div className="p-4 space-y-24">
        <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl text-5xl font-black max-w-4xl text-center leading-normal mx-auto">
          Meet our team of creators, designers, and problem solvers
        </h1>
        <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-12 2xl:place-items-start xl:2xl:place-items-start lg:2xl:place-items-start place-items-center">
            {teamMembers.map((member, index) => <TeamCard {...member} key={`team-card-${index}`} />)}
        </div>
      </div>
    </PageLayout>
    </>
  );
};

export default MeetOurTeam;

export const getStaticProps= async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})