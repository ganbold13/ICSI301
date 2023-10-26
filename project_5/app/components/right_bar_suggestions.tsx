import React, { use } from "react";
import SuggestionItem from "./suggestion_item";
import ProfilePic from "./profile_pic";
import UsernameText from "./username_text";
import Clickable from "./clickable";

export default function RightBarSuggestions({ data, user }: any) {
  return (
    <div className="suggestions-container flex mt-9 pl-16 flex-col">
      <div className="px-4 py-2">
        <div className="suggestion-item h-11 w-72 flex items-center">
          <Clickable href="/profile" className="">
            <ProfilePic size={44} src={user.image} username={user.username} />
          </Clickable>
          <div className="suggestion-user-info ml-3 flex flex-col">
            <UsernameText
              username={user.username}
              className="text-14-bold cursor-pointer"
            />
            <span className="text-12-light">{user.name}</span>
          </div>
          <div className="follow-button text-12-bold flex items-center ml-auto text-blue cursor-pointer">
            Switch
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="suggestions-header flex py-1 px-4">
          <span className="text-14-bold mr-auto" style={{ color: "#8e8e8e" }}>
            Suggested for you
          </span>
          <a href="#" className="text-14-light">
            See All
          </a>
        </div>
        <div
          className="right-bar-suggestions py-2"
        >
          {data.map((item: any) => {
            return <SuggestionItem data={item} key={item.username} />;
          })}
        </div>
      </div>
    </div>
  );
}