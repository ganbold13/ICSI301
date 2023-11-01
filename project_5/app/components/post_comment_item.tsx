import React from 'react'
import { data } from '../static/example_data'
import ActivityIcon from './icons/activity_icon'

const PostCommentItem = () => {
    return (
        <div className="space-y-2 px-4 pt-4">
            {data.feed.map((item, index) => (
                <div key={index} className="flex space-x-2">
                    <img
                        src={data.loginUser.image}
                        alt={data.loginUser.username}
                        className="w-8x` h-8 rounded-full"
                    />
                    <div className='w-full'>
                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <p className="text-sm font-semibold mr-1">{item.user.username}</p>
                                <p className="text-sm">{item.description}</p>
                            </div>
                            <ActivityIcon size={12}></ActivityIcon>
                        </div>
                        <div className="flex justify-start items-center mt-2">
                            <p className="text-xs text-gray-500">{item.time}</p>
                            <div className="flex space-x-4">
                                <button className="text-xs text-gray-500 hover:text-red-500">
                                    {item.likeCount} Likes
                                </button>
                                <button className="text-xs text-gray-500 hover:text-blue-500">
                                    Reply
                                </button>
                            </div>
                        </div>
                        <button className="text-xs text-gray-500 hover:text-blue-500">
                            View Replies
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostCommentItem