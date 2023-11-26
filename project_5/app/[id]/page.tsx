'use client'

import React, { useEffect, useState } from "react";

import MyLayout from "../my_layout";
import { usePathname } from "next/navigation";
import { data } from "../static/example_data";
import UsernameText from "../components/username_text";
import SettingsIcon from "../components/icons/settings_icon";
import SettingsButton from "../components/profile/settings_button";
import ProfileItemPhoto from "../components/profile/profile_item_photo";

export default function ProfilePage() {
  const pathname = usePathname();

  const userName = pathname.slice(1, pathname.length);

  const [user, setUser] = useState([]);
  const [feed, setFeed] = useState([]);

  const fetchData = async () => {
    try {
      const userResponse = await fetch('http://localhost:5000/getUserByName?username=' + userName)
      const userData = await userResponse.json();

      setUser(userData);

      const response = await fetch('http://localhost:5000/getPhotos?uid=' + ((userData[0] as any).uid));

      const photosData = await response.json();

      setFeed(photosData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    user.length > 0 && (
      <MyLayout user={user[0]}>
        <main className="profile-container pt-8 px-5 flex flex-col justify-center mx-auto max-w-5xl">
          <div className="profile-header flex flex-col mb-11">
            <div className="picture-and-details flex">
              <div className="profile-picture mr-8 w-72 flex justify-center">
                <img src={(user[0] as any).profile_pic} width={150} alt="profile picture" className="flex rounded-full" />
              </div>
              <div className="details relative">
                <div className="flex mb-5 items-center">
                  <div className="profile-name text-xl leading-6">
                    {userName}</div>
                  <div className="flex ml-5">
                    <SettingsButton>Edit profile</SettingsButton>
                    <SettingsButton className="ml-2">View archive</SettingsButton>
                  </div>
                  <SettingsIcon className="m-2"></SettingsIcon>
                </div>
                <div className="followers-details flex mb-5">
                  <div className="mr-10"><strong>4</strong> posts</div>
                  <div className="mr-10"><strong>4</strong> followers</div>
                  <div><strong>4</strong> following</div>
                </div>
                <div className="name-and-bio flex flex-col justify-between h-12">
                  <UsernameText username={(user[0] as any).username} nickname={(user[0] as any).nickname}></UsernameText>
                  <div className="bio text-14-light">{(user[0] as any).bio}</div>
                </div>
              </div>
            </div>
            <div className="name-and-bio hidden">
              <UsernameText username={(user[0] as any).username} nickname={(user[0] as any).nickname}></UsernameText>
              <div className="bio">{(user[0] as any).bio}</div>
            </div>
          </div>

          <div className="profile-body flex flex-col border-t border-gray-300">
            <div className="buttons flex justify-center">
              <div className="mr-16 font-bold border-t border-black py-4 text-xs">POSTS</div>
              <div className="mr-16 font-bold py-4 text-xs">SAVED</div>
              <div className="font-bold py-4 text-xs">TAGGED</div>
            </div>
            <div className="grid grid-cols-3">
              {feed && feed.map((val: any, idx) => {
                return (<ProfileItemPhoto key={idx} photo={val.imageURL}></ProfileItemPhoto>);
              })}
            </div>
          </div>
        </main>
      </MyLayout>)
  );
}