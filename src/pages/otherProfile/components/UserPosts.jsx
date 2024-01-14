import { Icon } from "@iconify/react";

const UserPosts = () => {
  return <div></div>;
};

function icon() {
  return (
    <Icon icon="bi:grid-3x3" className="text-[25px] justify-center mx-auto cursor-pointer" />
  );
}

UserPosts.icon = icon;
export default UserPosts;
