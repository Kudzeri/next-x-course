//на стороне сервера

type PageProps = {
  username: string;
};

export default async function TestPage({
  params,
}: {
  params: Promise<PageProps>;
}) {
  const {username} = await params;

  return <div>
    <h1 className="text-3xl font-bold mb-6">
        Profile @{username}
      </h1>
  </div>;
}
