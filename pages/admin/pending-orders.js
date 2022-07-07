import Head from "next/head";
import DashboardWrap from "../../Components/DashboardComp/DashboardWrap";

export default function Orders() {
  return (
    <>
      <Head>
        <title>Orders | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <DashboardWrap>
        <div className="smokeWhite"></div>
      </DashboardWrap>
    </>
  );
}
