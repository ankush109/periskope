import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import GroupIcon from "@mui/icons-material/Group";
import ContactsIcon from "@mui/icons-material/Contacts";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Image, { StaticImageData } from "next/image";
import peri from "../../../public/peri.png";

export default function Sidebar() {
  return (
    <div className="flex flex-col m-4">
      <div className="flex">
        <div>
          <Image src={peri} alt={""} className="w-[35px] m-1" />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-lg">Periskope</div>
          <span className="text-sm text-gray-600">b@gmail.com</span>
        </div>
      </div>
      <div className="my-4">
        <div className="flex gap-3 p-2 text-sm  hover:bg-slate-200">
          <div>
            <DashboardIcon
              style={{
                width: "20px",
              }}
            />
          </div>
          <div>Dashboard</div>
        </div>
        <div className="flex gap-3 p-2 text-sm hover:bg-slate-200">
          <div>
            <ChatIcon
              style={{
                width: "20px",
              }}
            />
          </div>
          <div>Chats</div>
        </div>
        <div className="flex gap-3 p-2 text-sm hover:bg-slate-200">
          <div>
            <GroupIcon
              style={{
                width: "20px",
              }}
            />
          </div>
          <div>Groups</div>
        </div>
        <div className="flex gap-3 p-2 text-sm hover:bg-slate-200">
          <div>
            <ContactsIcon
              style={{
                width: "20px",
              }}
            />
          </div>
          <div>Contacts</div>
        </div>
        <div className="flex gap-3 p-2 text-sm hover:bg-slate-200">
          <div>
            <EditNotificationsIcon
              style={{
                width: "20px",
              }}
            />
          </div>
          <div>Logs</div>
        </div>
        <div className="flex gap-3 p-2 text-sm hover:bg-slate-200">
          <div>
            <InsertDriveFileIcon
              style={{
                width: "20px",
              }}
            />
          </div>
          <div>Files</div>
        </div>
        <div className="flex gap-3 p-2 text-sm hover:bg-slate-200">
          <div>
            <SettingsSuggestIcon
              style={{
                width: "20px",
              }}
            />
          </div>
          <div>Settings</div>
        </div>
      </div>
      <div>
        <div className="flex  absolute bottom-0 left-0  ml-4">
          Help & Support
        </div>
      </div>
    </div>
  );
}
