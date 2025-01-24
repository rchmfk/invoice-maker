import ClientRouteGuard from "@/components/ClientRouteGuard";
import { ReactNode } from "react";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <main>
          <ClientRouteGuard>{children}</ClientRouteGuard>
        </main>
      </div>
    </div>
  );
};

export default LoginLayout;
