export default function Loading() {
  //для SSR
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white-500"></div>
    </div>
  );
}
