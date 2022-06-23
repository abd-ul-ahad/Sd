import Head from 'next/head';
import { Image } from 'react-bootstrap';

export default function Home() {
  return (
    <div >
      <Head>
        <title>SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <BelowNav />
      <section className='first-time_quote'>
        <div className='first-time'>
          <p>
            <b>First time here?</b> Read our
            welcome message to have
            an introduction about our
            product and services.
          </p>
        </div>

        <div className='quote'>
          <Image src={'/images/home/quote-symbol.png'} alt="Quote Symbol" className='quote-symbol' />
          <p className='quote-description'>
            <span className='first-letter'>S</span>ayabiDevs is a startup birthed by passionate and experienced domain experts and motivated individuals who love working together as a team, and is here to provide effective and on-time solutions to your IT problems.
          </p>
          <p className='text-center fw-bold' style={{ width: "150%" }}>Bilal Ahmer (Founder)</p>
        </div>
      </section>

      <h3 style={{ textAlign: "center", color: "#545454", fontWeight: "bold", paddingBottom: "2%", paddingTop: "1%", textShadow: "2px 1px 10px #a1a1a1" }}>OUR RECENT PROJECTS</h3>
      <div className="row" style={{ padding: "0 5%" }}>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <Image
            src={'/images/home/facebook-left.jpg'}
            className="w-100 shadow-1-strong rounded mb-4 shadowCustom"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <Image
            src={'/images/home/whatsapp-mid.png'}
            className="w-100 shadow-1-strong rounded mb-4 shadowCustom"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <Image
            src={'/images/home/messenger-right.png'}
            className="w-100 shadow-1-strong rounded mb-4 shadowCustom"
            alt="Boat on Calm Water"
          />
        </div>
      </div>
      {/* Founders and CEO */}
      <h3 style={{ textAlign: "center", color: "#545454", fontWeight: "bold", paddingBottom: "2%", paddingTop: "3%", textShadow: "2px 1px 10px #a1a1a1" }}>FOUNDERS & CEO</h3>
      <div className="row" style={{ padding: "0 5%" }}>
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <Image
            src={'/images/home/founder1.jpg'}
            className="w-100 shadow-1-strong rounded mb-4 shadowCustom rounded-circle"
            alt="Boat on Calm Water"
            style={{ border: "3px solid #E71B1E" }}
          />
        </div>

        <div className="col-lg-3 mb-4 mb-lg-0">
          <Image
            src={'/images/home/co-founder2.jpg'}
            className="w-100 shadow-1-strong rounded mb-4 shadowCustom rounded-circle"
            alt="Boat on Calm Water"
            style={{ border: "3px solid #E71B1E" }}
          />
        </div>

        <div className="col-lg-3 mb-4 mb-lg-0">
          <Image
            src={'/images/home/co-founder3.jpg'}
            className="w-100 shadow-1-strong rounded mb-4 shadowCustom rounded-circle"
            alt="Boat on Calm Water"
            style={{ border: "3px solid #E71B1E" }}
          />
        </div>

        <div className="col-lg-3 mb-4 mb-lg-0">
          <Image
            src={'/images/home/ceo4.jpg'}
            className="w-100 shadow-1-strong rounded mb-4 shadowCustom rounded-circle"
            alt="Boat on Calm Water"
            style={{ border: "3px solid #E71B1E" }}
          />
        </div>
      </div>

    </div>
  )
}


const BelowNav = () => {
  return (
    <section className="below-nav">
      <h3>SOFTWARE THAT DEFINES YOUR WORK!</h3>
      <p>
        Our vision is to support learning incentives
        and help customers and businesses alike flourish
        by providing a convenient means to satisfy project demands.
      </p>
    </section>
  )
}