"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:text-white ${
        isActive ? "text-white" : "text-white/80"
      }`}
    >
      {children}
    </Link>
  );
}
