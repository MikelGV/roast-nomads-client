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
        <div id="roaster" className="bg-white rounded-xl shadow-lg max-w-xs mx-auto md:max-w-lg">
            <Link href={`/roaster/${item.id}`}>
            <img className="mb-5 w-80 lg:w-[29rem] h-48 md:h-64 lg:h-96 rounded-t-lg md:rounded-t-xl object-cover" src="/images/pexels-dorukhan-pekcan-102942430-14050911.jpg" alt="{item.img.toString()}" />
            <div className="md:p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{item.name}</h3>
                <p className="text-md md:text-lg mb-1 md:mb-2">{item.location}</p>
                <p className="w-96 text-md md:text-lg mb-1 md:mb-2">{item.description}</p>
            </div>
            </Link>
        </div>
    )
}
