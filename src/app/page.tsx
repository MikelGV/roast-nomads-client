import Link from "next/link";

import { TopBar } from "./_components/topBar";

export default async function Home() {


  return (
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div id="topbar" className=" px-4 py-4 md:px-8 lg:px-96 flex justify-between items-center w-full">
            <a href="someting" className="p-4 md:p-6 lg:p-12 bg-gray-300 rounded-full"/>
            <Link href="/dashboard" className="text-[#D97430] font-semibold text-lg md:text-xl">Try demo</Link> 
        </div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-6 md:py-8 lg:px-8">
            {/* First part*/}
            <div className="">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#5C3A1A]">Travel the World Through Coffee</h1>
                <h2 className="text-lg md:text-xl text-center text-[#5C3A1A]">Discover specialty roasters from around the globe, curated just for you</h2>
                <div className="relative w-screen h-[20rem] md:h-[30rem] lg:h-[47rem]">
                    <img src="/images/ChatGPT-Image-Apr-1,2025,01_39_14-AM.png" className="w-full h-full object-cover"/>
                    <Link href="" className="absolute bottom-10 md:bottom-20 lg:bottom-36 left-4 md:left-16 lg:left-52 bg-[#D97430] text-lg md:text-xl font-bold text-white px-6 md:px-10 lg:px-20 py-4 md:py-5 lg:py-6 rounded-lg">Start your adventure</Link>
                </div>
            </div>
            {/*Second part*/}
            <div className="p-2 container mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#5C3A1A] mb-6 md:mb-8">Your Coffe Journey Begins Here</h1>

                <div className="flex flex-col md:flex-row mb-8 lg:mb-12 gap-4 md:gap-6">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className="text-lg md:text-xl text-semibold bg-white p-4 md:p-6 lg:p-8 shadow-md w-72 md:w-96">Step 1: Tell us your tastes.</p>
                        <span className="text-lg md:text-xl mb-6 text-[#5C3A1A] w-72 md:w-96">Quick preferences quiz to discover your ideal roast.</span>
                    </div>
                    <div className="flex items-center">
                        <img src="/images/pexels-jayoke-851555.jpg" className="w-72 md:w-[60rem] md:h-[27rem] object-cover" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-8 lg:mb-12 justify-betweeen">
                    <div className="mr-10 ">
                        <img src="/images/pexels-cottonbro-4820817.jpg" className="w-72 md:w-[59rem] md:h-[27rem] object-cover" />
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className="text-lg md:text-xl text-semibold bg-white p-4 md:p-8 shadow-md w-72 md:w-96">Step 2: We curate your coffee</p>
                        <span className="text-lg md:text-xl mb-6 text-[#5C3A1A] w-72 md:w-96">Expertly selected roasts from golbal artisan roasters.</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-8 md:mb-12 justify-betweeen">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className="text-lg md:text-xl text-semibold bg-white p-4 md:p-6 lg:p-8 shadow-md w-72 md:w-96 md:mr-10">Step 3: Explore and Enjoy</p>
                        <span className="text-lg md:text-xl text-[#5C3A1A] w-72 md:w-96">Share your coffee adventures with a trhiving community.</span>
                    </div>
                    <div className="">
                            <img src="/images/pexels-enginakyurt-2456429.jpg" className="w-72 md:w-[59rem] md:h-[27rem] object-cover" />
                    </div>
                </div>
            </div>
            {/*Third part*/}
            <div className="p-2">
                <h1 className="text-3xl md:text-4xl font-bold text-[#5C3A1A] mb-4">Join Our Global Coffee Community</h1>
                <p className="text-lg md:text-xl mb-4 md:mb-6 text-[#5C3A1A]">Connect with fellow coffee lovers, discover unique stories behind every roast, and share your own brewing adventures</p>
                <img src="/images/pexels-valeriiamiller-3361170.jpg" className="w-full h-[20rem] md:h[30rem] lg:h-[40rem] object-cover mb-10"/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-2">
                    <div className="h-28 w-72 md:w-[30rem] flex flex-col md:grid">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#5C3A1A]"> Coffee That Makes a Difference</h2>
                        <span className="text-lg md:text-xl text-[#5C3A1A] mb-10">
                            We partener with roasters committed to sustainable sourcing,
                            ethical practices, and exceptional quality-so every cup you
                            brew supports both people and planet.
                        </span>
                        <img src="/images/pexels-michael-burrows-7125739.jpg" className="w-72 md:w-[45rem] h-15 md:h-[20rem] object-cover"/>
                    </div>
                    <div className="grid gap-4">
                        <img src="/images/pexels-nsmedia97-27777799.jpg" className="w-72 md:w-[46rem] h-15 md:h-[30rem] object-cover "/>
                    </div>
                    <img src="/images/pexels-michael-burrows-7125543.jpg" className="w-72 md:w-[93rem] h-15 md:h-[30rem] object-cover"/>
                </div>
            </div>
            {/*Fourth part*/}
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-4xl font-bold text-[#5C3A1A]"> Never Run Out of Coffee Adventures</h1>
                <span className="text-lg md:text-xl text-[#5C3A1A]">
                    Join our community of curious coffee explorers. Every month, we spotlight
                    incredible specialty roasters from around the world-sharing their stories, lastest releases,
                    and where to find their best brews.
                </span>
            </div>
            <div className="p-2">
                <div className="flex items-center justify-center mb-10">
                    <Link href="" className="bg-[#D97430] p-4 md:p-8 rounded-xl text-center md:w-96 text-lg md:text-xl text-white">Subscribe now</Link>
                </div>
                <img src="/images/pexels-helder-quiala-434379851-15294461.jpg" className="w-72 md:w-[96rem] h-80 md:h-[30rem] lg:h-[44rem] object-cover" />
            </div>
            {/*Fifth part*/}
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-[#5C3A1A]">Stay Inspired. Stay Caffeinated.</h1>
                <p className="text-lg mg:text-xl text-[#5C3A1A]"> Sign up for exclusive coffee stories, brewing tips, and discover new coffe roasters.</p>
                <input className="border-2 border-[#5C3A1A] text-lg md:text-xl p-4 md:p-5 rounded-xl w-72 md:w-[44rem] mb-8" placeholder="Email"/>
                <button className="bg-[#D97430] text-lg md:text-xl text-white p-4 md:p-5 rounded-xl w-72 md:w-96 mb-16">Join the Newsletter</button>
            </div>
        </div>
      </main>
  );
}
