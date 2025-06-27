import { PAGES } from "@/config/pages.config";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <p className="text-neutral-600 mb-6">
        This page doesn't exist or has been removed.
      </p>
      <Link href={PAGES.HOME.href} className="text-blue-500 hover:underline">
        ← Go back to Home
      </Link>
    </div>
  );
}
