import SideBar from "./SideBar";
import TopBar from "./TopBar";



export default function DashboardWrap ({children}) {
    return (
        <>
            <SideBar />
            <TopBar />
            {children}
        </>
    )
}