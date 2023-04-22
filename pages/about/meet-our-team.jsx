import { TeamCard } from "../../components/card/teamCard";
import { MetaHeader } from "../../components/common/metaHeader";
import { PageLayout } from "../../components/layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const teamMembers = [{
    memberName:"Mr. Miyagi",
    position: "Software Engineer"}, 
    {
    memberName:"Mr. Miyagi",
    position: "UI/UX Designer"
},
{
    memberName:"Mr. Miyagi",
    position: "Full-Time Instructor"
},{
    memberName:"Mr. Miyagi",
    position: "Fullstack Engineer"
},{
    memberName:"Mr. Miyagi",
    position: "Backend Engineer"
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