'use client'
import React, { useEffect, useState } from "react";
import FeedItemHeader from "./feed_item_header";
import FeedItemButtons from "./feed_item_buttons";
import FeedItemComment from "./feed_item_comment";
import AddComment from "./add_comment";
import FeedItemPhotos from "./feed_item_photos";
import { useRouter } from "next/navigation";

export default function FeedItem({ data }: any) {
  const router = useRouter();

  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getComments?pid=' + data.pid);;
        const commentData = await response.json();

        const userResponse = await fetch('http://localhost:5000/getUsers?uid=' + data.uid);
        const userData = await userResponse.json();

        setUser(userData);
        setComments(commentData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <article className="feed-item-container flex flex-col">
      <FeedItemHeader
        user={user[0]}
      />
      <FeedItemPhotos photo={data.imageURL} />
      <FeedItemButtons className="feed-item-buttons-container w-full h-10 my-1 flex items-center justify-between" />
      <a href="#" className="feed-item-text text-14-bold my-1">
        {data?.likeCount || "0"} likes
      </a>
      <FeedItemComment
        user={user[0]}
        data={data}
      />
      <a
        className="overflow-hidden text-14-light cursor-pointer my-1"
        style={{ color: "#9a9a9a", display: "flex" }}
        onClick={() =>
          router.push(`/post/${data?.pid || "post-test"}`)
        }
      >
        View all {comments.length || "0"} comment
      </a>

      <a
        className="feed-item-date-text cursor-pointer uppercase"
        onClick={() =>
          router.push(`/post/${data?.pid || "post-test"}`)
        }
      >
      </a>
      <AddComment />
    </article>
  );
}