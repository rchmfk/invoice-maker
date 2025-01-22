'use client';
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { ReactNode } from "react";

const AdminRouteGuard = ({ children }: { children: ReactNode }) => {
  useProtectedRoute("Admin");
  return <>{children}</>;
};

export default AdminRouteGuard;