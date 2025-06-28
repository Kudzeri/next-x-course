"use client";

//на стороне клиента
import { useSearchParams } from "next/navigation";

export function ExplorePage() {
  const searchParams = new useSearchParams();
  const tag = searchParams.get("tag");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Explore {!!tag && `by #${tag}`}
      </h1>
    </div>
  );
}
