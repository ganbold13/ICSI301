'use client'

import React from "react";
import {useRouter} from "next/navigation";


export default function ProfilePic({
  src,
  username,
  size,
  border,
  href,
  ...props
}: any): JSX.Element {
  const router = useRouter();
  
  return (
    <span {...props} onClick={() => router.push(username)}>
      <img
        alt={`${username}'s profile pic`}
        data-testid="user-avatar"
        draggable="false"
        src={src}
        style={{
          width: size,
          height: size,
          borderRadius: size,
          border: border && "2px solid white",
          cursor: "pointer",
        }}
      ></img>
    </span>
  );
}