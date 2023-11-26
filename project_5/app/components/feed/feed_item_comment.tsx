import React, { useState } from "react";
import UsernameText from "../username_text";

export default function FeedItemComment({ user, data }: any) {
  const [showMore, setShowMore] = useState(data?.caption.length < 80);

  return (
    user &&
    <div className="overflow-hidden text-14-light inherit my-1">
      <UsernameText username={user.username} nickname={user.nickname} />
      <span className={!showMore ? "feed-item-text-description " : "inherit"}>
        {data?.caption ||
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}
      </span>
      {!showMore && (
        <span style={{ color: "#9a9a9a" }} onClick={() => setShowMore(true)}>
          {" "}
          more
        </span>
      )}
    </div>
  );
}