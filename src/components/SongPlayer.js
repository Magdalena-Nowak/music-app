import { useRef } from "react";
import { Heading } from "./Heading";

export function SongPlayer({ song }) {
  const audioRef = useRef();
  const { audioUrl, coverUrl } = song;

  return (
    <>
      <section>
        <Heading title="Music Player" />
        <img width="250" height="250" src={coverUrl} alt="Song cover"></img>
        <audio ref={audioRef} key={audioUrl}>
          <source src={audioUrl}></source>
        </audio>
        <div>
          <button onClick={() => audioRef.current.play()}>Play</button>
          <button onClick={() => audioRef.current.pause()}>Pause</button>
        </div>
      </section>
    </>
  );
}
