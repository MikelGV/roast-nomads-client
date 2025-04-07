import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import { TopBar } from "./_components/topBar";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <TopBar />
            {/* First part*/}
            <div className="">
                <h1 className="text-6xl font-bold text-[#5C3A1A]">Travel the World Through Coffee</h1>
                <h2 className="text-xl text-center text-[#5C3A1A]">Discover specialty roasters from around the globe, curated just for you</h2>
                <div className="">
                    <img src="" />
                    <Link href="">Start your adventure</Link>
                </div>
            </div>
            {/*Second part*/}
            <div className="p-2 container mx-auto">
                <h1 className="text-4xl font-bold text-[#5C3A1A] mb-8">Your Coffe Journey Begins Here</h1>

                <div className="flex items-center mb-12 gap-6">
                    <div className="flex flex-col gap-6">
                        <p className="text-xl text-semibold bg-white p-8 shadow-md w-96">Step 1: Tell us your tastes.</p>
                        <span className="text-xl mb-6 text-[#5C3A1A] w-96">Quick preferences quiz to discover your ideal roast.</span>
                    </div>
                    <div className="">
                        <img src="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                </div>
                <div className="flex items-center mb-12 justify-betweeen">
                    <div className="">
                        <img src="https://via.placeholder.com/400x300" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-xl text-semibold bg-white p-8 shadow-md w-96">Step 2: We curate your coffee</p>
                        <span className="text-xl mb-6 text-[#5C3A1A] w-96">Expertly selected roasts from golbal artisan roasters.</span>
                    </div>
                </div>
                <div className="flex items-center justify-betweeen mb-12 justify-betweeen">
                    <div className="flex flex-col gap-6">
                        <p className="text-xl text-semibold bg-white p-8 shadow-md w-96">Step 3: Explore and Enjoy</p>
                        <span className="text-xl text-[#5C3A1A] w-96">Share your coffee adventures with a trhiving community.</span>
                    </div>
                    <div className="">
                        <img src="https://via.placeholder.com/400x300" />
                    </div>
                </div>
            </div>
            {/*Third part*/}
            <div className="p-2">
                <h1 className="text-4xl font-bold text-[#5C3A1A]">Join Our Global Coffee Community</h1>
                <img src="" />
                <div className="">
                    <h2 className="text-3xl font-bold text-[#5C3A1A]"> Coffee That Makes a Difference</h2>
                    <span className="text-xl text-[#5C3A1A]">
                        We partener with roasters committed to sustainable sourcing,
                        ethical practices, and exceptional quality-so every cup you
                        brew supports both people and planet.
                    </span>
                    <img src="" className=""/>
                    <img src="" className=""/>
                    <img src="" className=""/>
                </div>
            </div>
            {/*Fourth part*/}
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-[#5C3A1A]"> Never Run Out of Coffee Adventures</h1>
                <span className="text-xl text-[#5C3A1A]">
                    Join our community of curious coffee explorers. Every month, we spotlight
                    incredible specialty roasters from around the world-sharing their stories, lastest releases,
                    and where to find their best brews.
                </span>
            </div>
            <div className="p-2">
                <div className="flex items-center">
                <Link href="" className="bg-[#D97430] p-8 rounded-xl text-center w-96 text-xl text-white">Subscribe now</Link>
                </div>
                <img src="" />
            </div>
            {/*Fived part*/}
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-4xl font-bold text-[#5C3A1A]">Stay Inspired. Stay Caffeinated.</h1>
                <p className="text-xl text-[#5C3A1A]"> Sign up for exclusive coffee stories, brewing tips, and discover new coffe roasters.</p>
                <input className="border-2 border-[#5C3A1A] text-xl p-5 rounded-xl w-[44rem] mb-8" placeholder="Email"/>
                <button className="bg-[#D97430] text-xl text-white p-5 rounded-xl w-96 mb-16">Join the Newsletter</button>
            </div>
        </div>
      </main>
    </HydrateClient>
  );
}
