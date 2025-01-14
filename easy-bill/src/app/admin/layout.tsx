
import SidebarAdmin from "@/components/SidebarAdmin";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarAdmin/>
      <div style={{ flex: 1 }}>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;