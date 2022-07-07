/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const { pathname } = router;
  const adminPathChecker = pathname.split("/");

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, []);

  return (
    <>
      <LoadingBar
        color="#E71B1E"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {!adminPathChecker.includes("admin") && <Navbar />}
      <Component {...pageProps} />
      {!adminPathChecker.includes("admin") && <Footer />}
    </>
  );
}

export default MyApp;
