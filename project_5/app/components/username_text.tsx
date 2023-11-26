import React from "react";
import { useRouter } from "next/navigation";

export default function UsernameText({ username, nickname, ...props }: any) {
  const router = useRouter();

  return (
    <a
      className="text-14-bold mr-1 cursor-pointer"
      onClick={() => router.push(username)}
      {...props}
    >
      {nickname || "username"}
    </a>
  );
}