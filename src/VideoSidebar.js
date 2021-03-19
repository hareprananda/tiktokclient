import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
  const clickLike = () => setLiked((current) => !current);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={clickLike} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={clickLike} />
        )}

        <p>{liked + (likes ?? 0)}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages ?? 0}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares ?? 0}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
