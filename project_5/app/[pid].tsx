import React from "react";
import MyLayout from "./my_layout";
import {useRouter} from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <MyLayout user={pid}>
      <div>{pid}</div>
    </MyLayout>
  );
}