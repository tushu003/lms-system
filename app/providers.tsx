"use client";

import { ProfileProvider } from "@/context/profile-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ProfileProvider>{children}</ProfileProvider>;
}
