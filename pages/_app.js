import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
