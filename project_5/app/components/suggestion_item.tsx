import React from "react";
import ProfilePic from "./profile_pic";
import UsernameText from "./username_text";

export default function SuggestionItem({ data }: any) {
  return (
    <div className="px-4 py-2">
      <div className="suggestion-item h-11 w-72 flex items-center">
        <ProfilePic size={44} src={data.image} username={data.username} />
        <div className="suggestion-user-info ml-3 flex flex-col">
          <UsernameText
            username={data.username}
            className="text-14-bold cursor-pointer"
          />
          <span className="text-12-light">{data?.text}</span>
        </div>
        <div className="follow-button text-12-bold flex items-center ml-auto text-blue cursor-pointer">
          Follow
        </div>
      </div>
    </div>
  );
}