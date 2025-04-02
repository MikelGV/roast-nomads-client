import Image from "next/image";
import Link from "next/link";


export default function SignUp() {
    return (
        <div className="flex justify-center items-center flex-row w-full h-screen gap-10">
            <div className="">
                <Image src="" alt="image missing" className=""/>
            </div>
            <div className="bg-[#FFFF] shadow-lg rounded-md px-8 pt-6 pb-8 mb-4">
                <h2 className="text-4xl text-[#5C3A1A] p-8 font-bold">Hello There Nomad!</h2>
                <form className="flex flex-col items-center">
                    <input className="border-2 border-[#5C3A1A] rounded-lg text-2xl p-3 mb-10 placeholder-[#5C3A1A]" name="text" placeholder="Name"/>
                    <input className="border-2 border-[#5C3A1A] rounded-lg text-2xl p-3 mb-10 placeholder-[#5C3A1A]" name="email" placeholder="Email"/>
                    <input className="border-2 border-[#5C3A1A] rounded-lg text-2xl p-3 mb-10 placeholder-[#5C3A1A]" name="password" placeholder="Password"/>
                    <button className="bg-[#5C3A1A] text-[#F5F2EE] rounded-lg p-3 px-24 text-2xl mb-10">Log In</button>
                    <Link href="/login" className="text-[#227DA3] text-2xl mb-10">Join Now</Link>
                </form>
            </div>
        </div>
    )
}
