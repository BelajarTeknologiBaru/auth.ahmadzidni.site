"use client";
import WithAuth from "@/app/middleware/withAuth";
import moment from "moment/moment";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Chat = ({ session }) => {
  const socket = io.connect("http://localhost:3001");
  const [sendMessange, setSendMessage] = useState("");
  const [receivedMessage, setReceivedMesagge] = useState([]);
  // console.log(receivedMessage);

  const handleSendMessage = async () => {
    const payloadMessage = {
      name: session?.user.name,
      image: session?.user.image,
      message: sendMessange,
      time: moment().format("HH:mm"),
      sender: session?.user.email,
    };
    setReceivedMesagge((list) => [...list, payloadMessage]);
    await socket.emit("send_message", payloadMessage);

    setSendMessage("");
  };

  useEffect(() => {
    // Mendengarkan event "receive_message" dari socket
    socket.on("receive_message", (data) => {
      setReceivedMesagge((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup listener saat komponen di-unmount
    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  if (!session) {
    redirect("/login?callbackUrl=/chat");
  }
  return (
    <div className="w-screen h-screen flex justify-center my-5">
      <div className="container ">
        <div className="card w-full card-side bg-base-100 shadow-xl border overflow-y-scroll">
          <div className="card-body">
            {receivedMessage &&
              receivedMessage.map((m, index) => {
                return (
                  <div key={index} className={m.sender !== session?.user.email ? "chat chat-start" : "chat chat-end"}>
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src={m.image} />
                      </div>
                    </div>
                    <div className="chat-header">{m.name}</div>
                    <div className="chat-bubble">{m.message}</div>
                    <time className="chat-footer opacity-50">{m.time}</time>
                  </div>
                );
              })}
            <div className="form-control mt-2">
              <div className="input-group">
                <input value={sendMessange} onChange={(e) => setSendMessage(e.target.value)} type="text" placeholder="Ketik pesan" className="input focus:border-none input-bordered w-full" />
                <button
                  onKeyDown={(e) => {
                    if (e.code == "Enter") {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  onClick={handleSendMessage}
                  className="btn btn-square"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
