'use client'

import { useState, useEffect } from "react";

import RightBarSuggestions from "./components/right_bar_suggestions";
import { data } from "./static/example_data";
import FeedItem from "./components/feed/feed_item";
import MyLayout from "./my_layout";

export default function Home() {
  const [user, setUser] = useState([]);
  const [feed, setFeed] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Fetch data from your server
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getPhotos');
        const photosData = await response.json();

        const userResponse = await fetch('http://localhost:5000/getUsers?uid=001')
        const userData = await userResponse.json();

        setUser(userData[0]);
        setFeed(photosData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    setSuggestions(data.suggestions as any);
  }, []);

  return (
    <MyLayout user={user}>
      <div className="homepage-container flex justify-center pt-6">
        <div className="homepage-feed mt-4 px-2">
          {feed.map((val, idx) => {
            return (
              (val as any).uid != (user as any).uid &&
              <FeedItem key={idx} data={val}></FeedItem>
            );
          })}
        </div>
        <div>
          <RightBarSuggestions data={data.suggestions} user={user}></RightBarSuggestions>
        </div>
      </div>
    </MyLayout>
  );
}