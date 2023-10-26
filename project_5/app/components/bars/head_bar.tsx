'use client'

import React from "react";
import { usePathname } from "next/navigation";

import ActivityIcon from "../icons/activity_icon";
import ActivityIconActive from "../icons/activity_icon_active";

import Clickable from "../clickable";
import Logo from "../icons/logo";
import SearchBar from "../search_bar";

export default function HeadBar() {
    const pathname = usePathname();

    const activity =
        pathname === "/activity" ? (
            <div>
                <ActivityIconActive className="header-icon" />
            </div>
        ) : (
            <div>
                <ActivityIcon className="header-icon" />
            </div>
        );

    return (
        <div className="headbar w-full fixed z-20 top-0 left-0 right-0 bg-white items-center justify-between px-4 border-gray-300 border-b">
                <Clickable href="/" className="">
                    <Logo></Logo>
                </Clickable>
                <div className="flex items-center">
                    <SearchBar></SearchBar>
                    <Clickable href="/activity" className="">{activity}</Clickable>
                </div>
        </div>
    );
}