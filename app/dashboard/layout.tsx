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
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col">
          <div className="flex flex-row justify-between">
            <Topbar />
          </div>
          {children}
        </div>
      </div>
    </AuthGuard>
  );
}
