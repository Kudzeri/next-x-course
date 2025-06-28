import type { Metadata } from "next";
import { ProfilePage } from "./Profile";

export const metadata: Metadata = {
  title: "Profile",
  description: "User profile page",
};

export default function Profile() {
  return <ProfilePage />;
}
