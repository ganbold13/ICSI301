'use client'

import React from "react";
import { usePathname } from "next/navigation";

import HomeIcon from "../icons/home_icon";
import DmIcon from "../icons/dm_icon";
import ExploreIcon from "../icons/explore_icon";
import ActivityIcon from "../icons/activity_icon";
import HomeIconActive from "../icons/home_icon_active";
import DmIconActive from "../icons/dm_icon_active";
import ExploreIconActive from "../icons/explore_icon_active";
import ActivityIconActive from "../icons/activity_icon_active";

import ProfilePic from "../profile_pic";
import Clickable from "../clickable";
import Logo from "../icons/logo";
import ReelIconActive from "../icons/reel_icon_active";
import ReelIcon from "../icons/reel_icon";
import SearchIcon from "../icons/search_icon";
import CreateIcon from "../icons/create_icon";
import CreateIconActive from "../icons/create_icon_active";
import InstagramIcon from "../icons/instagram_icon";


export default function SideBar({ user }: any) {
  const pathname = usePathname();
  // set icons
  const home =
    pathname === "/" ? (
      <div className="header-item">
        <HomeIconActive className="header-icon" />
        <strong>Home</strong>
      </div>
    ) : (
      <div className="header-item">
        <HomeIcon className="header-icon" />
        <p>Home</p>
      </div>
    );
  const messages =
    pathname === "/messages" ? (
      <div className="header-item">
        <DmIconActive className="header-icon" />
        <strong>Messages</strong>
      </div>
    ) : (
      <div className="header-item">
        <DmIcon className="header-icon" />
        <p>Messages</p>
      </div>
    );
  const explore =
    pathname === "/explore" ? (
      <div className="header-item">
        <ExploreIconActive className="header-icon" />
        <strong>Explore</strong>
      </div>

    ) : (
      <div className="header-item">
        <ExploreIcon className="header-icon" />
        <p>Explore</p>
      </div>
    );
  const activity =
    pathname === "/activity" ? (
      <div className="header-item">
        <ActivityIconActive className="header-icon" />
        <strong>Notifications</strong>
      </div>
    ) : (
      <div className="header-item">
        <ActivityIcon className="header-icon" />
        <p>Notifications</p>
      </div>
    );

  const reel = pathname === "/reels" ? (
    <div className="header-item">
      <ReelIconActive className="header-icon" />
      <strong>Reels</strong>
    </div>
  ) : (
    <div className="header-item">
      <ReelIcon className="header-icon" />
      <p>Reels</p>
    </div>
  )

  const create = pathname === "/create" ? (
    <div className="header-item">
      <CreateIconActive className="header-icon" />
      <strong>Create</strong>
    </div>
  ) : (
    <div className="header-item">
      <CreateIcon className="header-icon" />
      <p>Create</p>
    </div>
  )

  // const { data, setLoginUser } = LoginUserHook();
  const loginUserData = user;

  return (
    <div className="sidebar h-screen fixed z-20 top-0 left-0 bottom-0 bg-white flex justify-start px-3 pt-2 pb-5 border-gray-300 overflow-y-auto border-r">
      <div className="flex-col">
        <Clickable href="/" className="pt-6 px-3 pb-4 mb-5">
          <Logo className="logo-big"></Logo>
          <InstagramIcon className="logo-icon" />
        </Clickable>
        <Clickable href="/" className="">{home}</Clickable>
        <div className="header-item">
          <SearchIcon className="header-icon" />
          <p>Search</p>
        </div>
        <Clickable href="/explore" className="">{explore}</Clickable>
        <Clickable href="/reels" className="">{reel}</Clickable>
        <Clickable href="/messages" className="">{messages}</Clickable>
        <Clickable href="/activity" className="">{activity}</Clickable>
        <Clickable href="/create" className="">{create}</Clickable>
        {user && (
          <Clickable href="/profile" className="">
            <div className="header-item">
              <ProfilePic
                className="header-icon"
                src={loginUserData?.image}
                username={loginUserData?.username}
                size={22}
              />
              <p>Profile</p>
            </div>
          </Clickable>
        )}
      </div>
    </div>
  );
}