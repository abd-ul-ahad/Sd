import Head from "next/head";
import { Container } from "react-bootstrap";
import DashboardWrap from "../../Components/DashboardComp/DashboardWrap";
import { RiAdminFill } from "react-icons/ri";

export default function Orders() {
  return (
    <>
      <Head>
        <title>Orders | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <DashboardWrap>
        <div className="smokeWhite py-4">
          <Container>
            <div>
              <p className="h4">
                <RiAdminFill /> <span className="fw-bold">/</span>{" "}
                <span className="fw-bold">Pending Orders</span>
              </p>
            </div>
            <div></div>
          </Container>
        </div>
      </DashboardWrap>
    </>
  );
}
