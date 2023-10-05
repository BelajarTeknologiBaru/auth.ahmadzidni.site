import { FiSettings } from "react-icons/fi";
import KananSidebar from "../components/KananSidebar";
import { getSession } from "@/app/session/getSession";
import WithAuth from "@/app/middleware/withAuth";
import Sidebar from "../components/SideBar";
import NavbarChat from "../../chat/components/NavbarChat";

export const metadata = {
  title: "Pengaturan",
};

const AdvancedSettings = async () => {
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
        <Sidebar linkIsActive="Advanced" />
        <KananSidebar session={session} />
      </div>
    </WithAuth>
  );
};

export default AdvancedSettings;
