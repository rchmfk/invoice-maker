'use client';
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { ReactNode } from "react";

const ClientRouteGuard = ({ children }: { children: ReactNode }) => {
  useProtectedRoute("Client");
  return <>{children}</>;
};

export default ClientRouteGuard;