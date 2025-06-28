"use client";
//на стороне клиента

import { useParams } from "next/navigation";

export function ProfilePage() {
  const params = useParams<{ username: string }>();

  if (!params.username) {
    return <div>Username not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile @{params.username}</h1>
    </div>
  );
}
