import { PAGES } from "@/config/pages.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: PAGES.PROFILE_FAKE.title,
  description: PAGES.PROFILE_FAKE.description,
};

function FakeProfile() {
  return <div>FakeProfile</div>;
}

export default FakeProfile;
