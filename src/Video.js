import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const handleVideoPress = () => {
    videoRef.current.muted = !videoRef.current.muted;
    // if (playing) {
    //   videoRef.current.pause();

    // } else {
    //   videoRef.current.play();
    // }
    setPlaying((current) => !current);
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        ref={videoRef}
        className="video__player"
        loop
        src={url}
        autoPlay
        muted
      />
      <VideoFooter channel={channel} description={description} song={song} />
      {/* video footers */}

      {/* video sidebar */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
