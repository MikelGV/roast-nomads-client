import Link from "next/link";

/**
 * I need to set up a auth check to so that the user doesn't see the Try Demo
**/

export function TopBar() {
    return (
        <div className="w-full flex justify-between items-center fixed top-0 left-80 pr-44  pl-16 py-4 bg-gray-100 shadow">
            <div className="flex items-center">
                <span className="text-4xl font-bold">ROAST NOMADS</span>
            </div>
            <div className=" h-8 flex items-center space-x-4 px-72">
                <Link href="/login" className="text-[#D97430] font-bold text-xl">Try Demo</Link>
                <button className="text-[#D97430] font-semibold text-xl">Reset</button>
            </div>
        </div>
    )
}
