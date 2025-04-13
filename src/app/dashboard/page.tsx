//import { Roasters } from "../_components/roasters"
import { Roasters } from "../_components/roasters"
import { SideBar } from "../_components/sidebar"
import { TopBar } from "../_components/topBar"


export default function Dashboard() {
    return (
       <div className="">
            <TopBar />
            <div className="absolute overflow-y-auto top-30 left-96">
                <Roasters />
            </div>
            <SideBar />
        </div> 
    )
}
