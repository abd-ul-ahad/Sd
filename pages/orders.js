import Head from "next/head";
import { Container } from "react-bootstrap";
import DashboardWrap from "../Components/DashboardComp/DashboardWrap";
import { FaUserAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Orders() {
  return (
    <>
      <Head>
        <title>Orders | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <DashboardWrap admin={false}>
        <div className="smokeWhite py-4">
          <Container>
            <div>
              <p className="h4">
                <FaUserAlt /> <span className="fw-bold">/</span>{" "}
                <span className="fw-bold">Orders</span>
              </p>
            </div>
            <div>
              <table className="w-100 my-5">
                <thead
                  style={{ backgroundColor: "#1a4d80" }}
                  className="text-white"
                >
                  <tr>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      ID
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Order#
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Date
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Client Name
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Payment Method
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Total
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Payment Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--text-grey)" }}>
                    <td className="py-2 px-3">2387498</td>
                    <td className="py-2 px-3">2387</td>
                    <td className="py-2 px-3">dd/mm/yyyy</td>
                    <td className="py-2 px-3">Name</td>
                    <td className="py-2 px-3">Jazz Cash</td>
                    <td className="py-2 px-3">100,000</td>
                    <td
                      className="py-2 px-3 "
                      style={{ color: "var(--green)" }}
                    >
                      Complete
                    </td>
                  </tr>
                </tbody>
              </table>

              <div>
                <Link href="/services">
                  <Button
                    className={`materialUiGreenButton my-2 text-white`}
                    style={{ backgroundColor: "green" }}
                  >
                    Open New Order
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </DashboardWrap>
    </>
  );
}
