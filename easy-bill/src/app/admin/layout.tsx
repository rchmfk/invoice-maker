
import AdminRouteGuard from "@/components/AdminRouteGuard";
import SidebarAdmin from "@/components/SidebarAdmin";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarAdmin/>
      <div style={{ flex: 1 }}>
        <main>
          <AdminRouteGuard>
          {children}
          </AdminRouteGuard>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;