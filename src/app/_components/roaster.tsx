import Link from "next/link";

interface RoasterItem {
    img: string;
    name: string;
    location: string;
    description: string;
    id: string | number;
}

interface RoasterProps {
    item : RoasterItem;
}

export default function Roaster({item}: RoasterProps) {
    return (
        <div id="roaster" className="bg-white rounded-xl shadow-lg">
            <Link href={`/roaster/${item.id}`}>
            <img className="mb-5 w-[29rem] h-96 rounded-t-xl object-cover" src="/images/pexels-dorukhan-pekcan-102942430-14050911.jpg" alt="{item.img.toString()}" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="">{item.location}</p>
                <p className="w-96">{item.description}</p>
            </div>
            </Link>
        </div>
    )
}
