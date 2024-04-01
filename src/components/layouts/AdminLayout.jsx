import React from "react";

import SideBar from "../adminComponents/SideBar/SideBar";
import { Outlet } from "react-router";
import AdminHeader from "../adminComponents/Header/Header";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex gap-10">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
