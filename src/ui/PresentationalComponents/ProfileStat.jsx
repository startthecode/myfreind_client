export const ProfileStat = ({ number = 0, title = "Undefined" }) => {
  return (
    <div className="text-center">
      <h4 className="text-[18px] font-semibold">{number}</h4>
      <p className="text-[14px] font-normal">{title}</p>
    </div>
  );
};
