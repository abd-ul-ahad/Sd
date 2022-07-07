import Head from "next/head";
import DashboardWrap from "../../Components/DashboardComp/DashboardWrap";

export default function Tickets() {
  return (
    <>
      <Head>
        <title>Tickets | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <DashboardWrap>
        <div className="smokeWhite"></div>
      </DashboardWrap>
    </>
  );
}
