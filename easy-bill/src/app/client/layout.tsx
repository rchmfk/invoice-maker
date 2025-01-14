
import SidebarClient from "@/components/SidebarClient";
import { ReactNode } from "react";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarClient/>
      <div style={{ flex: 1 }}>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default ClientLayout;