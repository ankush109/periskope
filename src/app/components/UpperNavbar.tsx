import { GroupOutlined } from "@mui/icons-material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
function UpperNavbar() {
  return (
    <div className="flex justify-between shadow-lg mb-1 p-2">
      <div className="flex items-center justify-center ">
        <GroupOutlined />
        <div>Groups</div>
      </div>
      <div className="flex gap-4">
        <div className="shadow-md bg-white p-1 rounded-md ">docs</div>
        <div className="flex gap-2 shadow-md bg-white p-1 rounded-md">
          <span
            style={{
              color: "green",
            }}
          >
            ●
          </span>
          <div>6290293731</div>
        </div>

        <div className="flex gap-2 shadow-md bg-white p-1 rounded-md">
          <NotificationsNoneIcon />
        </div>
      </div>
    </div>
  );
}

export default UpperNavbar;
