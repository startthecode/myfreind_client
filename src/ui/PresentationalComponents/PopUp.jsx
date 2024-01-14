import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove_user_info } from "../../redux/user_Info_Slice";

const PopUp = ({ heading, subheading, close, children }) => {
  let [open, setOpen] = useState(true);
  let dispatch = useDispatch();
  if (!open) return null;
  return (
    <div className="h-screen w-full bg-black bg-opacity-60 fixed top-0 left-0 z-[102]">
      <div className="w-[80%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-2xl text-primary_text_clr px-[20px] pt-[20px] pb-5 text-center">
        <h3 className="text-[18px]  font-semibold mb-2">{heading}</h3>
        <p className="text-[14px] mb-4 ">{subheading}</p>

        {heading === "session expired log in again" ? null : children}
        {close && (
          <p
            className="text-[14px] text-black text-center py-3 border-t-2 border-gray-100 w-full block"
            onClick={() => setOpen(false)}
          >
            Close
          </p>
        )}

        {heading === "session expired log in again" && (
          <p
            className="text-[14px] text-black text-center py-3 border-t-2 border-gray-100 w-full block"
            onClick={() => dispatch(remove_user_info())}
          >
            Login Again
          </p>
        )}
      </div>
    </div>
  );
};

function OtherLinks({ link, text }) {
  return (
    <Link
      className="text-[14px] text-secondary_clr text-center py-3 border-t-2 border-gray-100 w-full block"
      to={link}
    >
      {text}
    </Link>
  );
}

function OtherButtons({ text, onClick }) {
  return (
    <button
      className="text-[14px] text-secondary_clr text-center py-3 border-t-2 border-gray-100 w-full block"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}

PopUp.OtherLinks = OtherLinks;
PopUp.OtherButtons = OtherButtons;

export default PopUp;
