import Link from "next/link";

const Sidebar = ({ linkIsActive }) => {
  return (
    <div className="w-1/4 h-screen flex flex-col">
      <div className="flex-1 flex flex-col  items-center">
        <ul className="menu bg-base-200 w-3/4 rounded-box">
          <li>
            <Link href="/settings" className={linkIsActive === "General" ? "bg-gray-300" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="hidden md:block">General</span>
            </Link>
          </li>
          <li>
            <Link href="/settings/advanced" className={linkIsActive === "Advanced" ? "bg-gray-300" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="hidden md:block">Advance Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
