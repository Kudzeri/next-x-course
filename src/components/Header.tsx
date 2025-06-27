import { PAGES } from "@/config/pages.config";
import Image from "next/image";
import Link from "next/link";
import { HeaderLink } from "./HeaderLink";

export function Header() {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src={"/x-logo.svg"}
          alt="X Logo"
          width={28}
          height={28}
          priority
        />
      </Link>
      <nav className="flex gap-6 text-sm text-white/80">
        <HeaderLink href={PAGES.HOME.href}>Home</HeaderLink>
        <HeaderLink href={PAGES.EXPLORE.href}>Explore</HeaderLink>
        <HeaderLink href={PAGES.PROFILE_FAKE.href}>Profile</HeaderLink>
      </nav>
    </header>
  );
}
