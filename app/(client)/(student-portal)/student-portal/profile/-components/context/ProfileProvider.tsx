"use client";

import React from "react";
import { ProfileProvider } from "./profile-context";
// import { ProfileProvider } from "@/";

export default function AppProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProfileProvider>{children}</ProfileProvider>;
}
