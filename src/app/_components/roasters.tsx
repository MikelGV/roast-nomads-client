'use client'
import { useEffect, useState } from "react";
import Roaster from "./roaster";

interface Filter {
    [key: string]:string;
}

interface RoasterItem {
    img: string;
    name: string;
    location: string;
    description: string;
    id: string | number;
}

interface RoastersProps {
    cat?: string;
}

export function Roasters({cat}: RoastersProps) {
    const [roasters, setRoasters] = useState<RoasterItem[]>([])
    const [filteredRoasters, setFilteredRoasters] = useState<RoasterItem[]>([])

    useEffect(() => {
        const getRoasters = async () => {
            try {
                const res = await fetch(cat ? 
                `http://api.roastnomads.com/api/roasters/roaster_id/product?filters=${cat}` : 
                    "http://api.roastnomads.com/api/roasters", {cache: "no-store"})
                if (!res.ok) throw new Error("failed to fetch roasters")
                const data = await res.json()
                setRoasters(data)
            } catch (err) {
                console.log(err)
            }
        } 
        getRoasters();
    }, [cat])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 md:gap-8 lg:gap-16 mb-5 md:mb-10">
            {
                cat ? filteredRoasters.map((item) => (
                    <Roaster key={item.id.toString()} item={item} />
                ))
                : roasters.slice(0, 8).map((item) => (
                    <Roaster key={item.id.toString()} item={item} />
                ))
            }
        </div>
    )
}
