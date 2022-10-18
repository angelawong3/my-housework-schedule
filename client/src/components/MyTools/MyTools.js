import React, { useEffect, useState } from "react";
import YouTubeSearch from "youtube-api-search";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function MyTools() {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);

  // display housework tips video before users' search
  useEffect(() => {
    YouTubeSearch({ key: API_KEY, term: "housework tips" }, (videos) => {
      setVideos(videos);
    });
  }, []);

  const search = (term) => {
    YouTubeSearch({ key: API_KEY, term: term }, (videos) => {
      setVideos(videos);
    });
  };

  const videoSearch = (event) => {
    event.preventDefault();
    search(searchTerm);
  };

  const videoList = videos.map((video) => {
    return (
      <div className="video-item" key={video.etag}>
        <div className="video-title">{video.snippet.title}</div>
        <iframe
          width="380"
          height="200"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }, []);

  return (
    <div className="mytools">
      <div className="youtube-search">
        <form onSubmit={videoSearch}>
          <input
            type="text"
            placeholder="Search for videos to help you"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit">Search!</button>
        </form>
      </div>
      <div className="video-list">{videoList}</div>
    </div>
  );
}

export default MyTools;
