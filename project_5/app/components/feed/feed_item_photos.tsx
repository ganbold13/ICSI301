import React, { useState, useRef, useEffect } from "react";

export default function FeedItemPhotos({ photo }: any) {
  const photoRef = useRef(0);

  const [refLoaded, setRefLoaded] = useState(false);

  useEffect(() => {
    if (photoRef) setRefLoaded(true);
  }, [photoRef]);

  return (
    <div className="feed-photo-container flex relative items-center">
      <div
        className="feed-photo-images-container w-full flex relative transition ease-linear duration-200"
      >
        <img
          className="flex-1 object-fill"
          src={photo || "https://picsum.photos/400/400"}
        />
      </div>
    </div>
  );
}