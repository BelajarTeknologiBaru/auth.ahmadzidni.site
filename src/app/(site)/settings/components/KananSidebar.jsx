"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { HiClipboardCopy } from "react-icons/hi";

const KananSidebar = ({ session }) => {
  const [idpPengguna, setIdPengguna] = useState([]);
  const [namaPengguna, setNamaPengguna] = useState([]);

  const handleCopy = () => {
    toast.success("copied to clipboard");
  };

  useEffect(() => {
    const email = session?.user.email;
    axios
      .post("/api/user", { email })
      .then((data) => {
        setIdPengguna(data.data.data.id);
        setNamaPengguna(data.data.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex-1 px-3">
      <div className="card w-full bg-base-100 shadow-xl mb-2">
        <div className="card-body">
          <h2 className="card-title">Avatar</h2>
          <p>Ganti Avatar disini.</p>
          <div className="card-actions justify-end me-20">
            <div>
              <div className="avatar">
                <div className="w-24 md:w-32 rounded-full">{session && <img src={session?.user.image} alt="Avatar" />}</div>
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl  mb-2">
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <div className="card-body">
          <h2 className="card-title">Nama</h2>
          <p>Ganti nama pengguna anda disini.</p>
          <div className="card-actions justify-start">
            <div className="form-control">
              <label className="input-group">
                <input value={namaPengguna} readOnly type="text" className="input input-bordered text-black" />
                <button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn btn-primary">
                  Ganti
                </button>
              </label>
            </div>
          </div>
          <dialog id="my_modal_5" className="modal modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Ganti nama</h3>
              <p className="py-4">Masukkan nama baru sesuai kemauan anda..</p>
              <form>
                <input className="w-full rounded-lg" type="text" />
                <button className="btn btn-primary mt-2 w-full" type="submit">
                  Ganti
                </button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl  mb-2">
        <div className="card-body">
          <h2 className="card-title">User Id</h2>
          <p>Salin user id anda disini.</p>
          <div className="card-actions justify-start">
            <div className="relative text-gray-700">
              <textarea className="textarea textarea-primary w-[200px] sm:w-[640px] md:w-[768px] lg:w-[1024px]" value={idpPengguna} placeholder="Bio" readOnly />
              <CopyToClipboard text={idpPengguna} onCopy={handleCopy}>
                <button className="absolute top-2 right-2">
                  <HiClipboardCopy />
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KananSidebar;
