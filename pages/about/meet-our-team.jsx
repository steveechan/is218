import { PageLayout } from "../../components/layout";


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

const TeamCard = ({ memberName, position }) => {
  return (
    <div className="space-y-4">
      <div className="w-[300px] h-[300px] bg-sage-main rounded">
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-bold">{memberName}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
};

const MeetOurTeam = () => {
  return (
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
  );
};

export default MeetOurTeam;
