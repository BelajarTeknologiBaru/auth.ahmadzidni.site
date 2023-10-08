import { FiSettings } from "react-icons/fi";
import { getSession } from "@/app/session/getSession";
import Sidebar from "../components/SideBar";
import NavbarChat from "../../chat/components/NavbarChat";
import AdvancedSettingsComponnets from "./components/AdvancedSettingsComponnets";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Pengaturan",
};

const AdvancedSettings = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/login?callbackUrl=/settings/advanced");
  }
  return (
    <div>
      <NavbarChat session={session} />
      <div className="flex h-40 items-center ms-5">
        <div className="inline-flex  font-bold text-4xl ">
          <FiSettings />
        </div>
        <div>
          <span className="inline-flex font-bold text-2xl ml-5">Pengaturan Akun</span>
        </div>
      </div>
      <hr className="mb-5" />
      <div className="flex">
        <Sidebar linkIsActive="Advanced" />
        <AdvancedSettingsComponnets />
      </div>
    </div>
  );
};

export default AdvancedSettings;
