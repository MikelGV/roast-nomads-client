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
    token: string;
}

interface LoginError {
    message: string;
}


export default function LogIn() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<LoginError | null>(null);

    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password} as LoginRequest)
            });

            if (!response.ok) {
                throw new Error("Login failed!")
            }

            const data = (await response.json()) as LoginResponse;
            console.log("Success:", data);

            router.push("/dashboard")
        } catch (err:any) {
            setError({message: err.message})
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
                    <input className="border-2 border-[#5C3A1A] rounded-lg text-2xl p-3 mb-10 placeholder-[#5C3A1A]" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" required/>
                    <input className="border-2 border-[#5C3A1A] rounded-lg text-2xl p-3 mb-10 placeholder-[#5C3A1A]" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
                    <button className="bg-[#5C3A1A] text-[#F5F2EE] rounded-lg p-3 px-24 text-2xl mb-10" type="submit">Log In</button>
                    {error && <p className="mb-10 font-bold text-xl text-red">{error.message}</p>}
                    <Link href="/signup" className="text-[#227DA3] text-2xl mb-10">Join Now</Link>
                </form>
            </div>
        </div>
    )
}
