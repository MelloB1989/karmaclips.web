"use client";

export default function Dash() {
  return <></>;
}

/*
import { useRef, useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

const [loaded, setLoaded] = useState(false);
const ffmpegRef = useRef(new FFmpeg());
const videoRef = useRef(null);
const messageRef = useRef(null);
const load = async () => {
  try {
    const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/umd";
    const ffmpeg = ffmpegRef.current;

    ffmpeg.on("log", ({ message }) => {
      if (messageRef.current) {
        messageRef.current.innerHTML = message; // Only set if messageRef is available
      }
      console.log(message);
    });

    // Load FFmpeg
    await ffmpeg.load({
      coreURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.js`,
        "text/javascript",
      ),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm",
      ),
      workerURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.worker.js`,
        "text/javascript",
      ),
    });

    setLoaded(true);
    console.log("FFmpeg successfully loaded");
  } catch (error) {
    console.error("Failed to load FFmpeg:", error);
    if (messageRef.current) {
      messageRef.current.innerHTML =
        "Failed to load FFmpeg. Check console for errors.";
    }
  }
};
const transcode = async () => {
  if (!loaded) await load(); // Only load if not loaded
  const ffmpeg = ffmpegRef.current;
  await ffmpeg.writeFile(
    "input.webm",
    await fetchFile(
      "https://raw.githubusercontent.com/ffmpegwasm/testdata/master/Big_Buck_Bunny_180_10s.webm",
    ),
  );
  await ffmpeg.exec(["-i", "input.webm", "output.mp4"]);
  const data = await ffmpeg.readFile("output.mp4");
  videoRef.current.src = URL.createObjectURL(
    new Blob([data.buffer], { type: "video/mp4" }),
  );
};

{/* <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg bg-primary">
  {loaded ? (
    <>
      <video ref={videoRef} controls></video>
      <br />
      <button onClick={transcode}>Transcode webm to mp4</button>
      <p ref={messageRef}></p>
      <p>Open Developer Tools (Ctrl+Shift+I) to View Logs</p>
    </>
  ) : (
    <button onClick={load}>Load ffmpeg-core (~31 MB)</button>
  )}
</div>}
*/
