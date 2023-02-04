import React, { useState } from "react";

import DashboardNav from "../components/DashboardNav";
import UsersTable from "../components/UsersTable";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen ">
      <DashboardNav />
      <UsersTable />
    </div>
  );
};

export default Dashboard;
