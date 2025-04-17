'use client'
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { useState, type FormEvent } from "react";

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    message: string;
    token: string;
}

interface LoginError {
    message: string;
}


export default function LogIn() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<LoginError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);


        // there is an erro here
        try {
            const requestBody = JSON.stringify({email, password} as LoginRequest);

            const response = await fetch("http://api.roastnomads.com/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: requestBody,
            });


            const rawText = await response.text();
            console.log("Raw Response Text:", rawText)

            if (!response.ok) {
                throw new Error(`Login failed: ${response.status} - ${rawText || "No error details"}`)
            }

            const data = JSON.parse(rawText) as LoginResponse;
            localStorage.setItem("sauthsoken", data.token)

            router.push("/dashboard")
        } catch (err: any) {
            setError({message: err.message})
        } finally {
            setIsLoading(false);
        }
    }
    
    return (
        <div className="flex justify-center items-center flex-row w-full h-screen gap-10">
            <div className="">
                <Image src="" alt="image missing" className=""/>
            </div>
            <div className="bg-[#FFFF] shadow-lg rounded-md px-8 pt-6 pb-8 mb-4">
                <h2 className="text-4xl text-[#5C3A1A] p-8 font-bold">Welcome Back Nomad</h2>
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <input className="border-2 border-[#5C3A1A] rounded-lg text-2xl p-3 mb-10 placeholder-[#5C3A1A]" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required/>
                    <input className="border-2 border-[#5C3A1A] rounded-lg text-2xl p-3 mb-10 placeholder-[#5C3A1A]" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
                    <button type="submit" disabled={isLoading} className="bg-[#5C3A1A] text-[#F5F2EE] rounded-lg p-3 px-24 text-2xl mb-10" >{isLoading ? "Loading..." : "Log In"}</button>
                    {error && <p className="mb-10 font-bold text-xl text-red">{error.message}</p>}
                    <Link href="/signup" className="text-[#227DA3] text-2xl mb-10">Join Now</Link>
                </form>
            </div>
        </div>
    )
}
