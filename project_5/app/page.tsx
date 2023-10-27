'use client'

import { useState, useEffect } from "react";

import RightBarSuggestions from "./components/right_bar_suggestions";
import RootLayout from "./layout";
import { data } from "./static/example_data";
import FeedItem from "./components/feed/feed_item";

export default function Home() {
  const [user, setUser] = useState([]);
  const [feed, setFeed] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setFeed(data.feed as any);
    setUser(data.loginUser as any);
    setSuggestions(data.suggestions as any);
  }
    , []);

  return (
    <RootLayout user={data.loginUser}>
        <div className="homepage-container flex justify-center pt-6">
          <div className="homepage-feed">
            {data.feed.map((val, idx) => {
              return (
                <FeedItem key={idx} data={val}></FeedItem>
              );
            })}
          </div>
          <div>
            <RightBarSuggestions data={data.suggestions} user={data.loginUser}></RightBarSuggestions>
          </div>
        </div>
    </RootLayout>
  );
}