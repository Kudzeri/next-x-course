import Image from "next/image";
import Link from "next/link";

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
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <Link href="/" className="hover:text-white">
          Explore
        </Link>
        <Link href="/" className="hover:text-white">
          Profile
        </Link>
      </nav>
    </header>
  );
}
