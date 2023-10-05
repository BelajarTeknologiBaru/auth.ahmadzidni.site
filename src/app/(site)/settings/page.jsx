import WithAuth from "@/app/middleware/withAuth";
import NavbarChat from "../chat/components/NavbarChat";
import { getSession } from "@/app/session/getSession";
import SideBar from "./components/SideBar";
import { FiSettings } from "react-icons/fi";
import KananSidebar from "./components/KananSidebar";

export const metadata = {
  title: "Pengaturan",
};

const GeneralSettings = async () => {
  const session = await getSession();
  return (
    <WithAuth session={session}>
      <NavbarChat session={session} />
      <div>
        <h1 className="font-bold text-2xl ms-2 my-10">
          <FiSettings /> Pengaturan Akun
        </h1>
        <hr className="my-2" />
      </div>
      <div className="flex">
        <SideBar linkIsActive="General" />
        <KananSidebar session={session} />
      </div>
    </WithAuth>
  );
};

export default GeneralSettings;
