import React from "react";
import FeedItemHeader from "./feed_item_header";
import FeedItemButtons from "./feed_item_buttons";
import FeedItemComment from "./feed_item_comment";
import AddComment from "./add_comment";
import FeedItemPhotos from "./feed_item_photos";
import Router from "next/router";
// import ModalStateHook from "../hooks/modal_hook";

export default function FeedItem({ data }: any) {
  // const { showModal, setModal } = ModalStateHook();

  // const moreClickEvent = () => {
  //   // setModal(true, data);
  // };
  return (
    <article className="feed-item-container flex flex-col">
      <FeedItemHeader
        image={data.user.image}
        username={data.user.username}
        data={data}
      // moreClickEvent={moreClickEvent}
      />
      <FeedItemPhotos photos={data.photos} />
      <FeedItemButtons className="feed-item-buttons-container w-full h-10 my-1 flex items-center justify-between" />
      <a href="#" className="feed-item-text text-14-bold my-1">
        {data?.likeCount || "0"} likes
      </a>
      <FeedItemComment
        data={{ username: data.user.username, description: data.description }}
      />
      <a
        className="overflow-hidden text-14-light cursor-pointer my-1"
        style={{ color: "#9a9a9a", display: "flex" }}
        onClick={() =>
          Router.push("/post/[pid]", `/post/${data?.pid || "post-test"}`)
        }
      >
        View all {data?.commentCount || "0"} comment
      </a>
      <div className="my-1">
        {data.popularComments.map((item: { username: any; description: any; }) => {
          return (
            <FeedItemComment
              key={item.username}
              data={{ username: item.username, description: item.description }}
            />
          );
        })}
      </div>

      <a
        className="feed-item-date-text cursor-pointer uppercase"
        onClick={() =>
          Router.push("/post/[pid]", `/post/${data?.pid || "post-test"}`)
        }
      >
      </a>
      <AddComment />
    </article>
  );
}