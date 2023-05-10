export const TeamCard = ({ memberName, position, description }) => {
  return (
    <div className="space-y-4">
      <div className="w-[300px] h-[300px] bg-sage-main rounded">
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-bold">{memberName}</h4>
        <p>{position}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
