import { useLocation } from "react-router-dom";
import { get_user_info } from "../../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Form } from "../../ui/PresentationalComponents/Form";
import Inputs from "../../ui/PresentationalComponents/Inputs";

export const InfoEditFields = ({ setFormData, formData }) => {
  let [imagePrev, setImagePrev] = useState();
  const location = useLocation();
  const { data: user } = location.state || {};

  function updateImage(e) {
    const file = e.target.files[0];
    setFormData({ ...formData, userprofile: e.target.files[0] });
    setImagePrev(URL.createObjectURL(file));
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  console.log(formData);
  useEffect(() => {
    setImagePrev(import.meta.env.VITE_IMAGE_URL + user?.UserDP);
  }, [user]);

  return (
    <Form className="px-[15px]">
      <div className=" flex flex-col items-center mb-14">
        <img
          src={`${imagePrev}`}
          alt=""
          className="h-[100px] w-[100px] object-cover object-top rounded-full border-primary_border_clr bordr-[1px] mb-5 mt-[20px]"
        />
        <p className="text-secondary_clr text-[14px] font-medium relative">
          <Inputs
            classname="absolute w-full h-full opacity-0"
            type="file"
            onChange={updateImage}
          />
          Change Profile Photo
        </p>
      </div>
      <Inputs
        onChange={handleChange}
        label="Name"
        inline
        name="FullName"
        defaultValue={user?.FullName}
      />

      <Inputs
        onChange={handleChange}
        label="Bio"
        inline
        name="bio"
        defaultValue={user?.Bio}
        placeholder="Enter your bio"
      />
      <Inputs
        onChange={handleChange}
        label="Website"
        inline
        name="linklist"
        defaultValue={user?.LinksList}
        placeholder="Enter your website Link"
      />

      <Inputs
        onChange={handleChange}
        label="Dob"
        name="dob"
        inline
        defaultValue={user?.DOB}
        placeholder="Enter your dob"
      />

      <Inputs
        onChange={handleChange}
        label="Gender"
        name="gender"
        inline
        defaultValue={user?.Gender}
        placeholder="Enter your gender"
      />
    </Form>
  );
};
