import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      {/* <video
        tabIndex="-1"
        className="video-stream html5-main-video"
        controlsList="nodownload"
        style={{ width: "646px", height: "363px", left: "0px", top: "0px" }}
        __idm_id__="553792513"
        src="blob:https://www.youtube.com/1efec79e-88b1-4036-bfbf-f232e9d6aadc"
      /> */}
      <div className="app__videos">
        <Video
          url="/video/pongbob.mp4"
          channel="Jokowi"
          description="this is working well"
          song="blink 182- first date"
          likes={100}
          messages={548}
          shares={18}
        />
        <Video
          url="/video/pongbob.mp4"
          channel="Jokowi"
          description="this is working well"
          song="blink 182- first date"
          likes={999}
          messages={548}
          shares={18}
        />
      </div>
    </div>
  );
}

export default App;
