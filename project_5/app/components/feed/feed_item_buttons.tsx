import React from "react";
import ActivityIcon from "../icons/activity_icon";
import CommentIcon from "../icons/comment_icon";
import SaveIcon from "../icons/save_icon";
import Clickable from "../clickable";
import PmIcon from "../icons/pm_icon";

export default function FeedItemButtons({ ...props }) {
  return (
    <div {...props}>
      <div className="flex">
        <Clickable href="" className="feed-item-buttons pr-2">
          <ActivityIcon height={24} width={24} size={24} />
        </Clickable>
        <Clickable href="" className="feed-item-buttons px-2">
          <CommentIcon height={24} width={24} />
        </Clickable>
        <Clickable href="" className="feed-item-buttons px-2">
          <PmIcon height={24} width={24} />
        </Clickable>
      </div>
      <div className="">
        <Clickable href="" className="feed-item-buttons">
          <SaveIcon height={24} width={24} />
        </Clickable>
      </div>
    </div>
  );
}