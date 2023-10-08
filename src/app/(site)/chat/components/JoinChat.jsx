"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Chat from "./Chat";

import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const JoinChat = ({ session }) => {
  const [isClicked, setIsClicked] = useState(false);

  const router = useRouter();
  const data = {
    name: session?.user.name,
    image: session?.user.image,
  };
  const handleJoin = () => {
    if (!session) {
      router.push("/login?callbackUrl=/chat");
    }
    if (session) {
      setIsClicked(true);
      socket.emit("join_room", data);
    }
  };

  return (
    <>
      {!isClicked && (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://img.freepik.com/premium-vector/live-chat-icon-with-speech-bubble-support-service_349999-1231.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Join to Live Chat.</h2>
              <p>kamu harus login terlebih dahulu untuk bergabung ke dalam live chat ini.</p>
              <div className="card-actions">
                <button onClick={handleJoin} className="btn btn-primary mt-2">
                  Gabung Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isClicked && <Chat session={session} />}
    </>
  );
};

export default JoinChat;
