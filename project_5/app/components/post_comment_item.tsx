'use client'
import React, { useEffect, useState } from 'react'
import { data } from '../static/example_data'
import ActivityIcon from './icons/activity_icon'

const PostCommentItem = ({ comments }: any) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from your server
        const fetchData = async () => {
            try {
                const userResponse = await fetch('http://localhost:5000/getUsers')
                const userData = await userResponse.json();

                setUsers(userData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        users.length > 0 && <div className="space-y-2 px-4 pt-4">
            {comments.map((item: any, index: any) => (
                <div key={index} className="flex space-x-2">
                    <img
                        src={(users.find(user => (user as any).uid == item.uid) as any).profile_pic}
                        className="w-8x` h-8 rounded-full"
                    />
                    <div className='w-full'>
                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <p className="text-sm font-semibold mr-1">{(users.find(user => (user as any).uid == item.uid) as any).nickname}</p>
                                <p className="text-sm">{item.text}</p>
                            </div>
                            <ActivityIcon size={12}></ActivityIcon>
                        </div>
                        <div className="flex justify-start items-center space-x-4 mt-2">
                            <p className="text-xs text-gray-500">{item.date}</p>
                            <div className="flex space-x-4">
                                <button className="text-xs text-gray-500 hover:text-red-500">
                                    {" " + item.likeCount} Likes
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