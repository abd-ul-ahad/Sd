import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  }, []);

  return (
    <>
      <LoadingBar
        color='#E71B1E'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
