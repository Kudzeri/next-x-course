import type { IMenuItem } from "@/shared/types/menu-item.interface";
import Link from "next/link";

// interface Props extends IMenuItem {
//   isActive: boolean;
// }
interface Props {
  menuItem: IMenuItem;
  isActive: boolean;
}

export function MenuItem({ menuItem, isActive }: Props) {
  return (
    <Link
      href={menuItem.href}
      className={`hover:text-white ${
        isActive ? "text-white" : "text-white/80"
      }`}
    >
      {menuItem.name}
    </Link>
  );
}
