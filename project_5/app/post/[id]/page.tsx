'use client'

import { ImageDetail } from '@/app/components/image_detai'
import PostComment from '@/app/components/post_comment'
import { data } from '@/app/static/example_data'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const Post = () => {
  const pathname = usePathname();
  const pid = pathname.slice(pathname.length - 3, pathname.length);

  const [user, setUser] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [comments, setComments] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/getPhotoById?pid=' + pid);
      const photosData = await response.json();
      setPhoto(photosData);

      const responseComment = await fetch('http://localhost:5000/getComments?pid=' + pid);
      const commentsData = await responseComment.json(); 
      setComments(commentsData);

      const responseUser = await fetch('http://localhost:5000/getUsers?uid=' + photosData[0].uid);
      const userData = await responseUser.json();
      setUser(userData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    photo.length > 0 && user.length > 0 && <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div className='post-container flex border border-black'>
        <ImageDetail image={(photo[0] as any).imageURL} />
        <PostComment user={user[0]} photo={photo[0]} comments={comments}></PostComment>
      </div>
    </div>
  );
}


export default Post