import NavbarChat from "../chat/components/NavbarChat";
import { getSession } from "@/app/session/getSession";
import SideBar from "./components/SideBar";
import { FiSettings } from "react-icons/fi";
import KananSidebar from "./components/KananSidebar";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Pengaturan",
};

const GeneralSettings = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login?callbackUrl=/settings");
  }

  return (
    <div>
      <NavbarChat session={session} />
      <div className="flex h-[200px] items-center ms-5  ">
        <div className="inline-flex  font-bold text-4xl ">
          <FiSettings />
        </div>
        <div>
          <span className="inline-flex font-bold text-2xl ml-5">Pengaturan Akun</span>
        </div>
      </div>
      <hr className="mb-5" />
      <div>
        <ul className="menu menu-horizontal md:hidden bg-base-200 rounded-box">
          <li>
            <a>General</a>
          </li>
          <li>
            <a>Advence settings</a>
          </li>
        </ul>
      </div>
      <div className="flex">
        <SideBar linkIsActive="General" />
        <KananSidebar session={session} />
      </div>
    </div>
  );
};

export default GeneralSettings;
