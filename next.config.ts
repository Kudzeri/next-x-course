import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://dummyjson.com",
  },
  images: {
    domains: ["cdn.dummyjson.com"],
  },
};

export default nextConfig;
