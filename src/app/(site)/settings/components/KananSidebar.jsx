"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { HiClipboardCopy } from "react-icons/hi";

const KananSidebar = ({ session }) => {
  const [idpPengguna, setIdPengguna] = useState([]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset copied state after 2 seconds
  };

  useEffect(() => {
    const email = session?.user.email;
    axios
      .post("/api/user", { email })
      .then((data) => {
        setIdPengguna(data.data.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" flex-1 ">
      <div className="card  w-full bg-base-100 shadow-xl image-full mb-2">
        <div className="card-body">
          <h2 className="card-title">Avatar</h2>
          <p>Ganti Avatar disini.</p>
          <div className="card-actions justify-start">
            <div className="avatar">
              <div className="w-24 rounded-full">{session && <img src={session?.user.image} />}</div>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card  w-full bg-base-100 shadow-xl image-full mb-2">
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <div className="card-body">
          <h2 className="card-title">Nama</h2>
          <p>Ganti nama pengguna anda disini.</p>
          <div className="card-actions justify-start ">
            <div className="form-control">
              <label className="input-group">
                <input value={session?.user.name} type="text" className="input input-bordered text-black" />
                <button onClick={() => toast.success("ok")} className="btn btn-primary">
                  Ganti
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="card  w-full bg-base-100 shadow-xl image-full mb-2">
        <div className="card-body">
          <h2 className="card-title">User Id</h2>
          <p>Salin user id anda disini.</p>
          <div className="card-actions justify-start ">
            <div className="relative text-gray-700 ">
              <textarea className="textarea textarea-primary w-[200px] md:w-[400px] h-15 md:h-10" value={idpPengguna} placeholder="Bio" readOnly />
              <CopyToClipboard text={idpPengguna} onCopy={handleCopy}>
                <button className="absolute top-2 right-2 ">{copied ? "Copied!" : <HiClipboardCopy />}</button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KananSidebar;
