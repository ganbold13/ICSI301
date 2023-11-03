"use client"

import React from 'react'
import AddComment from './feed/add_comment'
import FeedItemButtons from './feed/feed_item_buttons'
import { data } from '../static/example_data'
import Link from 'next/link'
import PostCommentItem from './post_comment_item'

const PostComment = () => {
    return (
        <div className="post-comment relative w-full py-1">
            <button
                className="absolute top-4 right-4 text-white text-2xl"
            >
                <Link href="/"> &times; </Link>
            </button>

            <div className="px-4 py-4 border-b  border-gray-400">
                <div className="flex space-x-2">
                    <img
                        src={data.loginUser.image}
                        className="w-8 h-8 rounded-full"
                    />
                    <div className="w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex">
                                <p className="text-sm font-semibold ml">
                                    {data.loginUser.username}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PostCommentItem></PostCommentItem>

            <div className="bottom-section border-gray-400 border-t absolute bottom-0 left-0 right-0">
                <div className="px-4">
                    <FeedItemButtons className="feed-item-buttons-container w-full h-10 my-1 flex items-center justify-between" />
                    <a href="#" className="feed-item-text text-14-bold my-1">
                        {data?.feed[0].likeCount || "0"} likes
                    </a>
                    <AddComment></AddComment>
                </div>
            </div>
        </div>
    );
};

export default PostComment;

