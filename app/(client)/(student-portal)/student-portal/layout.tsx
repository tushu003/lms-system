import { ProfileProvider } from "@/app/(client)/(student-portal)/student-portal/profile/-components/context/profile-context";

export default function StudentPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProfileProvider>{children}</ProfileProvider>;
}
