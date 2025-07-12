import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import AuthGuard from "../components/AuthGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex">
        <Sidebar />
        <div className="w-full flex flex-col">
          <div className="flex justify-between">
            <Topbar />
          </div>
          {children}
        </div>
      </div>
    </AuthGuard>
  );
}
