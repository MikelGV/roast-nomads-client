import Link from 'next/link';
//import ViewportInfo from '../components/ViewportInfo';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div
        id="topbar"
        className="px-4 py-4 md:px-8 lg:px-32 xl:px-48 flex justify-between items-center w-full"
      >
        <a
          href="something"
          className="p-4 md:p-6 lg:p-8 xl:p-10 bg-gray-300 rounded-full"
        />
        <Link
          href="/dashboard"
          className="text-[#D97430] font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl"
        >
          Try demo
        </Link>
      </div>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-6 md:py-8 lg:px-8 xl:px-12">
        {/* First part */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-[#5C3A1A]">
            Travel the World Through Coffee
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center text-[#5C3A1A]">
            Discover specialty roasters from around the globe, curated just for you
          </h2>
          <div className="relative w-screen h-[20rem] md:h-[30rem] lg:h-[40rem] xl:h-[45rem]">
            <img
              src="/images/ChatGPT-Image-Apr-1,2025,01_39_14-AM.png"
              className="w-full h-full object-cover"
              alt="Coffee banner"
              loading="lazy"
            />
            <Link
              href=""
              className="absolute bottom-10 md:bottom-16 lg:bottom-24 xl:bottom-32 left-4 md:left-12 lg:left-32 xl:left-48 bg-[#D97430] text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold text-white px-6 md:px-8 lg:px-16 xl:px-20 py-4 md:py-5 lg:py-6 xl:py-7 rounded-lg"
            >
              Start your adventure
            </Link>
          </div>
        </div>
        {/* Second part */}
        <div className="p-2 container mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-[#5C3A1A] mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            Your Coffee Journey Begins Here
          </h1>
          <div className="flex flex-col md:flex-row mb-8 lg:mb-12 xl:mb-16 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold bg-white p-4 md:p-6 lg:p-8 xl:p-10 shadow-md w-72 md:w-80 lg:w-96 xl:w-[28rem]">
                Step 1: Tell us your tastes.
              </p>
              <span className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#5C3A1A] w-72 md:w-80 lg:w-96 xl:w-[28rem]">
                Quick preferences quiz to discover your ideal roast.
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="/images/pexels-jayoke-851555.jpg"
                className="w-72 md:w-96 lg:w-[28rem] xl:w-[48rem] md:h-[27rem] object-cover"
                alt="Coffee quiz"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-8 lg:mb-12 xl:mb-16 justify-between">
            <div className="mr-0 md:mr-8 lg:mr-10 xl:mr-12">
              <img
                src="/images/pexels-cottonbro-4820817.jpg"
                className="w-72 md:w-96 lg:w-[28rem] xl:w-[48rem] md:h-[27rem] object-cover"
                alt="Coffee curation"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold bg-white p-4 md:p-6 lg:p-8 xl:p-10 shadow-md w-72 md:w-80 lg:w-96 xl:w-[28rem]">
                Step 2: We curate your coffee
              </p>
              <span className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#5C3A1A] w-72 md:w-80 lg:w-96 xl:w-[28rem]">
                Expertly selected roasts from global artisan roasters.
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-8 lg:mb-12 xl:mb-16 justify-between">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold bg-white p-4 md:p-6 lg:p-8 xl:p-10 shadow-md w-72 md:w-80 lg:w-96 xl:w-[28rem] mr-0 md:mr-8 lg:mr-10 xl:mr-12">
                Step 3: Explore and Enjoy
              </p>
              <span className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#5C3A1A] w-72 md:w-80 lg:w-96 xl:w-[28rem]">
                Share your coffee adventures with a thriving community.
              </span>
            </div>
            <div>
              <img
                src="/images/pexels-enginakyurt-2456429.jpg"
                className="w-72 md:w-96 lg:w-[28rem] xl:w-[48rem] md:h-[27rem] object-cover"
                alt="Coffee community"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* Third part */}
        <div className="p-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-[#5C3A1A] mb-4">
            Join Our Global Coffee Community
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-[#5C3A1A]">
            Connect with fellow coffee lovers, discover unique stories behind every roast, and share your own brewing adventures
          </p>
          <img
            src="/images/pexels-valeriiamiller-3361170.jpg"
            className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] xl:h-[45rem] object-cover mb-10"
            alt="Coffee community"
            loading="lazy"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg-gap-6 xl:gap-8">
                    <div className="w-72 md:w-80 lg:w-96 xl:w-[24rem] flex flex-col md:grid">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#5C3A1A]"> Coffee That Makes a Difference</h2>
                        <span className="text-lg md:text-xl lg:text-2xl xl:tex-2xl text-[#5C3A1A] mb-10">
                            We partener with roasters committed to sustainable sourcing,
                            ethical practices, and exceptional quality-so every cup you
                            brew supports both people and planet.
                        </span>
                        <img src="/images/pexels-michael-burrows-7125739.jpg" className="w-72 md:w-[40rem] h-15 md:h-[20rem] object-cover"/>
                    </div>
                    <div className="grid gap-4 ml-12">
                        <img src="/images/pexels-nsmedia97-27777799.jpg" className="w-72 md:w-[40rem] h-15 md:h-[33rem] object-cover "/>
                    </div>
                    <img src="/images/pexels-michael-burrows-7125543.jpg" className="w-72 lg:w-[80rem] xl:w-[80rem] h-15 md:h-[30rem] object-cover"/>
             </div>
        </div>
        {/* Fourth part */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-[#5C3A1A]">
            Never Run Out of Coffee Adventures
          </h1>
          <span className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#5C3A1A]">
            Join our community of curious coffee explorers. Every month, we spotlight incredible specialty roasters from around the world—sharing their stories, latest releases, and where to find their best brews.
          </span>
        </div>
        <div className="p-2">
          <div className="flex items-center justify-center mb-10">
            <Link
              href=""
              className="bg-[#D97430] p-4 md:p-6 lg:p-8 xl:p-10 rounded-xl text-center w-72 md:w-80 lg:w-96 xl:w-[24rem] text-lg md:text-xl lg:text-2xl xl:text-2xl text-white"
            >
              Subscribe now
            </Link>
          </div>
          <img
            src="/images/pexels-helder-quiala-434379851-15294461.jpg"
            className="w-72 md:w-96 lg:w-[28rem] xl:w-[90rem] h-auto md:h-[20rem] lg:h-[24rem] xl:h-[30rem] object-cover"
            alt="Coffee subscription"
            loading="lazy"
          />
        </div>
        {/* Fifth part */}
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-[#5C3A1A]">
            Stay Inspired. Stay Caffeinated.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#5C3A1A]">
            Sign up for exclusive coffee stories, brewing tips, and discover new coffee roasters.
          </p>
          <input
            className="border-2 border-[#5C3A1A] text-lg md:text-xl lg:text-2xl xl:text-2xl p-4 md:p-5 lg:p-6 xl:p-7 rounded-xl w-72 md:w-80 lg:w-96 xl:w-[28rem] mb-8"
            placeholder="Email"
          />
          <button className="bg-[#D97430] text-lg md:text-xl lg:text-2xl xl:text-2xl text-white p-4 md:p-5 lg:p-6 xl:p-7 rounded-xl w-72 md:w-80 lg:w-96 xl:w-[24rem] mb-16">
            Join the Newsletter
          </button>
        </div>
      </div>
    </main>
  );
}