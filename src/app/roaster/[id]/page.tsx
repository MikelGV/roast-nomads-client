'use client'
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import Product from "~/app/_components/product";

interface Filters {
    [key: string]: string;
}

interface Roaster {
    id: string | number;
    roaster_name?: string;
    image?: string;
    location?: string;
    description?: string;
    website_url?: string;
}

interface ProductItem {
    img: string;
    id: string | number;
    title: string;
    origin: string;
    price: number;
    type: string;
    method: string;
    web_url: string;
}

export default function Page() {
    const params = useParams();
    const id = params?.id as string;
    const [roaster, setRoaster] = useState<Roaster | null>(null);
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const filters: Filters = {};

    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                console.log("Rquest URL:", `http://localhost:8080/api/roasters/id?id=${id}`)
                const roasterRes = await fetch(`http://localhost:8080/api/roasters/id?id=${id}`, {
                    cache: 'no-store',
                    credentials: 'include',
                });

                console.log("Roaster Fetch Response:", {
                    satus: roasterRes.status,
                    statusText: roasterRes.statusText,
                    header: Object.fromEntries(roasterRes.headers.entries()),
                    url: roasterRes.url,
                })

                const rawRes = await roasterRes.text()
                console.log("Raw Roaster response:", rawRes)

                if (!roasterRes.ok) {
                    if (roasterRes.status === 401) {
                        setError("authentication failed. Please log in again.")
                        router.push("/login");
                        return
                    }else if (roasterRes.status === 404) {
                        notFound();
                    }
                    setError(`Failed to fetch roaster: Status ${roasterRes.status}, Response: ${rawRes}`);
                    return
                }

                let roasterData;
                try {
                    roasterData = JSON.parse(rawRes)
                } catch (parseError) {
                    console.error("JSON Parse Error for Roaster:", parseError)
                    setError("Invalid JSON resposne from server for roaster. check backend logs")
                    return;
                }

                console.log(roasterData.name)
                setRoaster(roasterData);

                const productRes = await fetch(`http://localhost:8080/api/products?roasters_id=${id}`, { cache: "no-store", credentials: "include"});
                if (!productRes.ok) throw new Error("Failed to fetch products");
                const productsData = await productRes.json();
                setProducts(productsData);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id])

    if (loading) return <div>Loading...</div>
    if (error) return <div className="text-red font-bold">Error: {error}</div>
    if (!roaster) return null;

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div id="topbar" className="p-4 px-96 flex justify-between items-center w-full">
                <a href="someting" className="p-12 bg-gray-300 rounded-full"/>
                <Link href="/dashboard" className="text-[#D97430] font-semibold text-xl">Back</Link> 
            </div>
            {/*Roaster Profile*/}
            <div id="roaster" className=" flex justify-center gap-5 mb-33">
                <img src="/images/pexels-dorukhan-pekcan-102942430-14050911.jpg" className=" w-[35rem] h-[45rem] object-cover" alt="{roaster.img.toString()}"/>
                <div className="flex flex-col justify-center gap-5 bg-white p-8">
                    <h1 className="text-5xl font-bold">{roaster.roaster_name}</h1>
                    <p className="text-md text-[#227DA3]">{roaster.location}</p>
                    <p className="w-[38rem] text-xl mb-10">
                        {roaster.description}
                    </p>
                    <a className="text-[#F5F2EE] bg-[#D97430] rounded-lg py-4 w-[25rem] ml-22 text-2xl mb-10 text-center" href="https://google.com/" target="_blank">Discover {roaster.name}</a>
                </div>
            </div>
            {/*Products*/}
            <div className="grid grid-cols-3 justify-center items-center gap-44">
                {products.map((item, index) => (
                    <Product key={item.id?.toString() || `product-${index}`} item={item}/>
                ))}
            </div>
        </div>
    ) 
}
