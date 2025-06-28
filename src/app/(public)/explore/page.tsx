import { PAGES } from "@/config/pages.config";
import { ExplorePage } from "./Explore";
import { Suspense } from "react";

export const metadata = {
  title: PAGES.EXPLORE.title,
  description: PAGES.EXPLORE.description,
};

export default function Explore() {
  return (
    <>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <ExplorePage />
      </Suspense>
    </>
  );
}
