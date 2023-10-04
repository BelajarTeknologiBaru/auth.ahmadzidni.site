"use client";
import axios from "axios";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

const DeleteUser = ({ email }) => {
  const data = {
    email,
  };

  const handleDelete = async () => {
    await axios.post("/api/deleteuser", data).then(() => toast.success("Berhasil menghapus akun"));

    setTimeout(() => {
      signOut();
    }, 3000);
  };
  return (
    <button className="p-2 bg-rose-500 hover:bg-rose-600 rounded-sm text-gray-100 font-bold" onClick={handleDelete}>
      {" "}
      delete user
    </button>
  );
};

export default DeleteUser;
