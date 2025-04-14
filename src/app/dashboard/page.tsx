//import { Roasters } from "../_components/roasters"
import { Roasters } from "../_components/roasters"
import { SideBar } from "../_components/sidebar"
import { TopBar } from "../_components/topBar"


export default function Dashboard() {
    return (
       <div className="min-h-screen">
            <TopBar />
            <div className="flex">
                <SideBar />
                <main className="flex-1 p-4 md:p-6 lg:p-8 md:ml-64 mt-24 overflow-y-auto">
                    <div className="max-w-[90rem] mx-auto">
                        <Roasters />
                    </div>
                </main>
            </div>
        </div> 
    )
}
