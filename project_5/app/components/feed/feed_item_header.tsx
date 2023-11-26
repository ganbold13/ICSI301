import React from "react";
import ProfilePic from "../profile_pic";
import MoreSettings from "../icons/more_icon";
import UsernameText from "../username_text";

export default function FeedItemHeader({ user }: any) {
  return (
    user &&
    <div className="feed-item-header w-full h-11 pl-1 pb-3 bg-white flex items-center">
      <ProfilePic src={user.profile_pic} size={32} username={user.username} />
      <UsernameText
        className="feed-item-header-text text-14-bold mr-1 ml-4 cursor-pointer"
        username={user.username || "username"}
        nickname={user.nickname || 'user'}
      />
      <button className="ml-auto flex">
        <MoreSettings />
      </button>
    </div>
  );
}