import Head from "next/head";
import SideBar from "../../Components/DashboardComp/SideBar";
import TopBar from "../../Components/DashboardComp/TopBar";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div>
      <SideBar/>
      <TopBar />
      </div>
    </>
  );
}
