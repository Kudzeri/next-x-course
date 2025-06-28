"use client";


import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/router";

export function ProfileButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push(PAGES.HOME.href)}>Go to Home</button>
  );
}
