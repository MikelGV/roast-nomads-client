'use client'
import Link from "next/link";
import { useState } from "react";

/**
 * I need to add an image instead of or a letter instead of the a tag.
 * I need to build the logic for the reset and the filters
**/

export function SideBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    const closeSideBar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={toggleSideBar} className="md:hidden fixed to-4 left-4 z-50 p-2 bg-[#5C3A1A] text-white rounded-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
            </button>
        <div className={`fixed left-0 top-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translatex-0" : "-translate-x-full"
                } md:translate-x-0 md:fixed md:w-80`}>
            <div className="w-80 bg-white shadow-md left-4 p-4 md:left-0 md:w-64 lg:w-80 ">
                <button onClick={closeSideBar} className="md:hidden absolute top-4 right-4 text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
                </button>
                <div className="border-b p-4 border-black mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <Link href="someting" className="p-7 md:p-9 ml-3 bg-[#5C3A1A] border-[#5C3A1A] rounded-full"></Link>
                        <div className="flex flex-col pr-12 md:pr-16">
                            <h2 className="text-lg md:text-xl">John Doe</h2>
                            <span className="text-sm">Status</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start px-2 md:px-4">
                        <input className="border-2 border-[#5C3A1A] mb-2 md:mb-4 rounded-xl p-1 md:p-2" placeholder="Search"/>
                        <div className="flex flex-rows justify-between py-2 md:py-4">
                            <div className="">
                                <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                                <span className="text-sm md:text-md">Recents</span>
                            </div>
                            {isOpen && (
                                <div className=" ml-4 md:hidden">
                                    <button className="  text-[#D97430] font-semibold text-sm">Reset</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="border-b p-2 md:p-4 border-black mb-4">
                    <div className="px-2 md:px-4">
                        <input className="mr-2 leading-tight rounded-full border-gray-300 " type="checkbox"/>
                        <span className="text-lg md:text-xl">Roast Level</span>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Light</span>
                        </div>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Medium</span>
                        </div>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Dark</span>
                        </div>
                    </div>
                </div>
                <div className="border-b p-4 border-black mb-4">
                    <div className="px-2 md:px-4">
                        <input className="mr-2 leading-tight rounded-full border-gray-300 " type="checkbox"/>
                        <span className="text-lg md:text-xl">Coffee Origin</span>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Africa</span>
                        </div>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Latin America</span>
                        </div>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Asia</span>
                        </div>
                    </div>
                </div>
                <div className="border-b p-4 border-black mb-4">
                    <div className="px-2 md:px-4">
                        <input className="mr-2 leading-tight rounded-full border-gray-300 " type="checkbox"/>
                        <span className="text-lg md:text-xl">Coffee Notes</span>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Fruity</span>
                        </div>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Nutty</span>
                        </div>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Spicy</span>
                        </div>
                    </div>
                </div>
                <div className="p-2 md:p-4 pb-6 md:pb-12">
                    <div className="px-2 md:px-4">
                        <input className="mr-2 leading-tight rounded-full border-gray-300 " type="checkbox"/>
                        <span className="text-lg md:text-xl">Brewing Method</span>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Roast Level</span>
                        </div>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Roast Level</span>
                        </div>
                        <div className="flex flex-row ml-4 md:ml-10 justify-start">
                            <input className="mr-2 leading-tight rounded-full border-gray-300" type="checkbox"/>
                            <span className="text-sm md:text-lg">Roast Level</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {isOpen && (
            <div className="fixed inset-0 bg-[#f5f2ee] bg-opacity-50 z-30 md:hidden" onClick={closeSideBar}></div>
        )}
        </>
    )
}
