import { ImageDetail } from '@/app/components/image_detai'
import PostComment from '@/app/components/post_comment'
import { data } from '@/app/static/example_data'
import Link from 'next/link'
import React from 'react'

const Post = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div className='post-container flex border border-black'>
        <ImageDetail image={data.feed[0].photos[0]} />
        <PostComment></PostComment>
      </div>
    </div>
  );
}


export default Post