import Head from "next/head";
import { RiAdminFill } from "react-icons/ri";
import DashboardWrap from "../../Components/DashboardComp/DashboardWrap";
import { Container } from "react-bootstrap";

export default function Cancellation() {
  return (
    <>
      <Head>
        <title>Cancellation | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <DashboardWrap>
        <div className="smokeWhite py-4">
          <Container>
            <div>
              <p className="h4">
                <RiAdminFill /> <span className="fw-bold">/</span>{" "}
                <span className="fw-bold">Pending Cancellation</span>
              </p>
            </div>
            <div></div>
          </Container>
        </div>
      </DashboardWrap>
    </>
  );
}
