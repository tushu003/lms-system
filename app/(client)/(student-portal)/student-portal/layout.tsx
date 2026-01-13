

import { ProfileProvider } from "./profile/-components/context/profile-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProfileProvider>{children}</ProfileProvider>;
}
