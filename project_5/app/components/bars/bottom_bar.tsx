'use client'

import React from "react";
import { usePathname } from "next/navigation";

import HomeIcon from "../icons/home_icon";
import DmIcon from "../icons/dm_icon";
import ExploreIcon from "../icons/explore_icon";
import HomeIconActive from "../icons/home_icon_active";
import DmIconActive from "../icons/dm_icon_active";
import ExploreIconActive from "../icons/explore_icon_active";

import ProfilePic from "../profile_pic";
import Clickable from "../clickable";
import ReelIconActive from "../icons/reel_icon_active";
import ReelIcon from "../icons/reel_icon";
import CreateIcon from "../icons/create_icon";
import CreateIconActive from "../icons/create_icon_active";



export default function BottomBar({ user }: any) {
  const pathname = usePathname();

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

  const loginUserData = user;

  return (
    <div className="bottombar h-14 w-full fixed z-20 bottom-0 left-0 right-0 bg-white justify-between border-gray-300 border-t">
      <div className="flex justify-around">
        <Clickable href="/" className="">{home}</Clickable>
        <Clickable href="/explore" className="">{explore}</Clickable>
        <Clickable href="/reels" className="">{reel}</Clickable>
        <Clickable href="" className="">{create}</Clickable>
        <Clickable href="" className="">{messages}</Clickable>
        {/* {user && ( */}
          <div className="header-item">
            <ProfilePic
              className="header-icon"
              src={loginUserData?.profile_pic}
              username={loginUserData?.username}
              size={22}
            />
          </div>
        {/* )} */}
      </div>
    </div>
  );
}