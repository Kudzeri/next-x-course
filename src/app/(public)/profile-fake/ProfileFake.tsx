import dynamic from "next/dynamic";

const DynamicProfileButton = dynamic(() =>
  import("./ProfileButton").then((mod) => mod.ProfileButton)
); // подгрузка идет лениваяся, только когда компонент виден на экране (оптимизация)

export function ProfileFake() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Fake Profile</h1>

      <DynamicProfileButton />
    </div>
  );
}
