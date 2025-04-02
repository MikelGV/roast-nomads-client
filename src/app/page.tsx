import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import { TopBar } from "./_components/topBar";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <TopBar />
        </div>
      </main>
    </HydrateClient>
  );
}
