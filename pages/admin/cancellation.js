import Head from "next/head";
import DashboardWrap from "../../Components/DashboardComp/DashboardWrap";

export default function Cancellation() {
  return (
    <>
      <Head>
        <title>Cancellation | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <DashboardWrap>
        <div className="smokeWhite"></div>
      </DashboardWrap>
    </>
  );
}
