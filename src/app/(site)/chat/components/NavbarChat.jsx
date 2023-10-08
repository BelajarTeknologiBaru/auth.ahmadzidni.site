"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

const NavbarChat = ({ session }) => {
  //   console.log(session.user.image);
  const data = [
    {
      text: "Homepage",
      link: "/",
      isActive: true,
    },
    {
      text: "Chat",
      link: "/chat",
      isActive: true,
    },
    {
      text: "Portfolio",
      link: "/portofolio",
      isActive: true,
    },
  ];
  return (
    <div className="navbar bg-base-100 shadow z-50 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {data.map((d, index) => {
              return (
                <li key={index}>
                  <Link href={d.link}>{d.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          ahmadzidni.site
        </Link>
      </div>
      <div className="navbar-end">
        {!session ? (
          <Link href="/login" className="btn btn-primary btn-md ">
            Login
          </Link>
        ) : (
          <>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img loading="lazy" alt="profile" src={session?.user?.image} />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content z-[50] mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                <div className="my-2 ms-2 ">
                  <h3 className="">{session?.user.name}</h3>
                  <h3 className="font-bold ">{session?.user.email}</h3>
                </div>
                <li>
                  <hr />
                </li>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <Link href="/settings">Settings</Link>
                </li>
                <li>
                  <div
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Logout
                  </div>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavbarChat;
