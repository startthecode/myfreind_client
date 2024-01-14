const Divider = ({ text = false, className }) => {
  return (
    <div
      className={` border-slate-300 w-full border-t-[1px] relative ${className}`}
    >
      <span className="text-[14px] text-slate-600 absolute -top-5 bg-white px-10 left-[50%] translate-x-[-50%]">
        {text}
      </span>
    </div>
  );
};

export default Divider;
