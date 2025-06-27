import { PAGES } from "@/config/pages.config";
import type { Metadata } from "next";
import { ProfileFake } from "./ProfileFake";

export const metadata: Metadata = {
  title: PAGES.PROFILE_FAKE.title,
  description: PAGES.PROFILE_FAKE.description,
};

function FakeProfile() {
  return <ProfileFake />;
}

export default FakeProfile;
