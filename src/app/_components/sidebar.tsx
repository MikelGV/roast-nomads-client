import Image from "next/image";
import Link from "next/link";

/**
 * I need to add an image instead of or a letter instead of the a tag.
 * I need to build the logic for the reset and the filters
**/

export function SideBar() {
    return (
        <div className="fiex left-0 top-0 h-full ">
            <div className="w-80 bg-white shadow-md left-4 ">
                <div className="border-b p-4 border-black mb-5">
                    <div className="flex justify-between items-center mb-5">
                        <a href="someting" className="p-9 ml-3 bg-[#5C3A1A] border-[#5C3A1A] rounded-full"></a>
                        <div className="flex flex-col pr-20">
                            <h2 className="text-xl">John Doe</h2>
                            <span className="text-sm">Status</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start px-4">
                        <input className="border-2 border-[#5C3A1A] mb-4 rounded-xl p-2" placeholder="Search"/>
                        <div className="py-4">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Recents</span>
                        </div>
                    </div>
                </div>
                <div className="border-b p-4 border-black mb-5">
                    <div className="px-4">
                        <input className="mr-2 leading-tight rounded-full border-gray-300 " type="checkbox"/>
                        <span className="text-xl">Roast Level</span>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Roast Level</span>
                        </div>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Roast Level</span>
                        </div>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Roast Level</span>
                        </div>
                    </div>
                </div>
                <div className="border-b p-4 border-black mb-5">
                    <div className="px-4">
                        <input className="mr-2 leading-tight rounded-full border-gray-300 " type="checkbox"/>
                        <span className="text-xl">Coffee Origin</span>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Roast Level</span>
                        </div>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Roast Level</span>
                        </div>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Roast Level</span>
                        </div>
                    </div>
                </div>
                <div className="border-b p-4 border-black mb-5">
                    <div className="px-4">
                        <input className="mr-2 leading-tight rounded-full border-gray-300 " type="checkbox"/>
                        <span className="text-xl">Coffee Notes</span>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Roast Level</span>
                        </div>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Roast Level</span>
                        </div>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Roast Level</span>
                        </div>
                    </div>
                </div>
                <div className=" p-4 pb-12">
                    <div className="px-4">
                        <input className="mr-2 leading-tight rounded-full border-gray-300 " type="checkbox"/>
                        <span className="text-xl">Roast Level</span>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Roast Level</span>
                        </div>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md">Roast Level</span>
                        </div>
                        <div className="flex flex-row ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-md ">Roast Level</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
