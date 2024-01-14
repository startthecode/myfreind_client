import { Icon } from "@iconify/react";

const UserTags = () => {
  return <div></div>;
};

function icon() {
  return (
    <Icon
      icon="ph:address-book-light"
      className="text-[30px] justify-center mx-auto cursor-pointer"
    />
  );
}

UserTags.icon = icon;
export default UserTags;
