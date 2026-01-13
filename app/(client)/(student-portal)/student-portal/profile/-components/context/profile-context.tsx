"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Profile = {
  name: string;
  designation: string;
  country: string;
  totalBooking: number;
  about: string;
  sessionGrades: string;
  avatarDataUrl?: string;
};

type Ctx = {
  profile: Profile;
  updateProfile: (next: Partial<Profile>) => void;
  ready: boolean;
};

const STORAGE_KEY = "app.profile.v1";

const defaultProfile: Profile = {
  name: "Michael Thompson",
  designation: "Student",
  country: "New York. USA",
  totalBooking: 12,
  about:
    "Michael has over 12 years of experience teaching physics and mathematics to high school and college students. He specializes in making complex concepts easy to understand and enjoys helping students achieve their academic goals.",
  sessionGrades: "High School (Grades 9—12)",
};

const ProfileContext = createContext<Ctx | null>(null);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setProfile({ ...defaultProfile, ...(JSON.parse(raw) as Profile) });
    } catch {}
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {}
  }, [profile, ready]);

  const updateProfile = (next: Partial<Profile>) =>
    setProfile((prev) => ({ ...prev, ...next }));

  const value = useMemo(() => ({ profile, updateProfile, ready }), [profile, ready]);

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used inside ProfileProvider");
  return ctx;
}
