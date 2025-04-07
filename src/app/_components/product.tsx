import Link from "next/link";
interface ProductItem {
    img: string;
    id: string | number;
    title: string;
    price: number;
    type: string;
    origin: string;
    method: string;
    web_url: string;
}

interface ProductProps {
    item: ProductItem;
}

export default function Product({item}: ProductProps) {
    return (
        <div id="roaster" className="bg-white rounded-xl shadow-lg">
            <Link href={item.web_url} target="_blank" className="">
                <img className="mb-5" src="{item.img}" alt="{item.img.toString()}" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="">
                        {item.type}
                    </p>
                    <p className="">{item.origin}</p>
                    <p className="">
                        {item.method}
                    </p>
                </div>
            </Link>
        </div>
    )
}

