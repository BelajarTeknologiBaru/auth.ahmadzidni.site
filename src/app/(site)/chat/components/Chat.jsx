"use client";
import WithAuth from "@/app/middleware/withAuth";

const Chat = ({ session }) => {
  return (
    <WithAuth session={session}>
      <div className="w-screen h-screen flex justify-center my-5">
        <div className="container ">
          <div className="card w-full card-side bg-base-100 shadow-xl border overflow-y-scroll">
            <div className="card-body">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1G2ye1gTauHDy5vh2qNCNyWvAKO_KpcYFgZ17--uBC1CjYuAoqYeC9rIVEQme_p6pjY&usqp=CAU" />
                  </div>
                </div>
                <div className="chat-header">Obi-Wan Kenobi</div>
                <div className="chat-bubble">hallo bre</div>
                <time className="chat-footer opacity-50">12:45</time>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1G2ye1gTauHDy5vh2qNCNyWvAKO_KpcYFgZ17--uBC1CjYuAoqYeC9rIVEQme_p6pjY&usqp=CAU" />
                  </div>
                </div>
                <div className="chat-header">Anakin</div>
                <div className="chat-bubble">iya bre</div>
                <time className="chat-footer opacity-50">12:46</time>
              </div>
              <div className="form-control mt-2">
                <div className="input-group">
                  <input type="text" placeholder="Ketik pesan" className="input input-bordered w-full" />
                  <button className="btn btn-square">Kirim</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WithAuth>
  );
};

export default Chat;
