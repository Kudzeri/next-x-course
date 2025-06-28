import type { Metadata } from "next";
import { ProfilePage } from "./Profile";

type Params = {
  username: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Metadata {
  return {
    title: `@${(await params).username}`,
    description: `User profile page for ${(await params).username}`,
  };
}

export default function Profile() {
  return <ProfilePage />;
}
