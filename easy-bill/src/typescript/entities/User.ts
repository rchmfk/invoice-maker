export type addUserData = {
    email: string | null;
    name: string | null;
    phoneNumber?: string | null;
    role: "USER" | "ADMIN" | string;
    address?: string;
    userId?: string
  };