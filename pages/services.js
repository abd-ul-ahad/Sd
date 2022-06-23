import Head from "next/head";
import Script from "next/script";
import { Image } from 'react-bootstrap';
import { ServicesPanel } from "../Components/DisplayPanels";



export default function Service() {

    let ourServices = [
        {
            imageSrc: "/images/services/images.png",
            imageAlt: "Mobile Development",
            title: 'Mobile Application',
            desc: "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. Mobile applications are essential these days for every business. We provide all type of mobile development including IOS, Android&nbsp; &nbsp;and Windows."
        },
        {
            imageSrc: "/images/services/transparent-web-development-icon-web-design-icon-design-icon-5da1ac0687e196.1781253615708764225566.jpg",
            imageAlt: "Web Development",
            title: 'Web App',
            desc: "Web app development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services. responsive web applications are essentials for every business."
        },
        {
            imageSrc: "/images/services/download.png",
            imageAlt: "Cyber security",
            title: 'Cyber Security & Crime',
            desc: "Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. Cyber crime on the other hand deals with investigating criminal aspect in the cyber space to reduce criminal activities. We provide forensics and auditing services to help detect and prevent attacks."
        },

    ]

    return (
        <div>
            <Head>
                <title>Services | SayabiDevs</title>
                <link rel="icon" href="/images/favicon.ico" />
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" /> */}
            </Head>
            {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></Script>
            <Script src="/script/bs-init.js"></Script> */}
            <div style={{ "backgroundColor": "#ff0018" }}>
                <div className="container">
                    <div className="row">
                        <div className="col" style={{ "color": "var(--bs-white)" }}>
                            <h1 className="text-center text-primary"><strong><span style={{ "color": "rgb(255, 255, 255)" }}>Our Services</span></strong></h1>
                            <p className="fw-light text-center" style={{ "padding": "0px", "paddingLeft": "48px", "paddingRight": "74px" }}>Retaining customer base is important for any enterprise, it takes great effort to make good customer relationship and minute error can ruin it. Owing to our outstanding customer service we have maintained the 85 % customer retention rate. We, the best IT service provider company in Noida help your business in getting loyalty back by transforming into latest advanced IT technology. Our BA, Designing, Developing, Support and Consultant team are always at your service to assist you in consultant, implementation, integration and support. We are the trustful answer for enterprises that are inclining towards digital era. Digitizing your work help in overall 25 % reduction in the core capital of the company and hence better ROI.<br /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12"><Image src="/images/services/service.jpg" style={{ "filter ": "blur(0px)", "opacity": "0.58", "paddingLeft": "0px", "marginLeft": "-13px" }} width="102%" alt="our services" /></div>
                </div>
            </div>
            <div className="container py-4 py-xl-5">
                <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">

                    {ourServices.map((e, i) => {
                        return <ServicesPanel key={i} imageSrc={e.imageSrc} imageAlt={e.imageAlt} title={e.title} desc={e.desc} />
                    })}

                </div>
            </div>

        </div>
    )
}
