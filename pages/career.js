import styles from "../styles/Career.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { CgSmartphoneChip } from "react-icons/cg";
import { FaQuestion } from "react-icons/fa";
import Head from "next/head";
import { VacancyPanel, CoreValuesPanel } from "../Components/DisplayPanels";


export default function Career() {
  let vacancies = [
    {
      title: "Senior Data Engineer",
      jobType: "Full time",
      workExp: "2-3 Years",
      dateOpened: "dd/mm/yyyy",
      jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      remoteJob: "Yes"
    },
    {
      title: "Senior Data Engineer",
      jobType: "Full time",
      workExp: "2-3 Years",
      dateOpened: "dd/mm/yyyy",
      jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      remoteJob: "Yes"
    },
    {
      title: "Senior Data Engineer",
      jobType: "Full time",
      workExp: "2-3 Years",
      dateOpened: "dd/mm/yyyy",
      jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      remoteJob: "Yes"
    },
  ]

  let coreValues = [
    {
      imgSrc: "/images/career/clientSatis.png",
      desc: "Exceed Clients’ Expectations"
    },
    {
      imgSrc: "/images/career/man-robot.svg",
      desc: "Certified Team"
    },
    {
      imgSrc: "/images/career/portfolio.svg",
      desc: "Diverse Portfolio"
    }
  ]
  return (
    <div>
      <Head>
        <title>Career | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      {/* Page Starts */}
      <div className={`${styles.careerHeader} mb-4`} >
        <Container className="h-100 d-flex justify-content-start align-items-center">
          <div className="typingWrap" >
            <h1 className={`${styles.textLarge} typed-out`} >Find Opportunities.</h1>
          </div>
        </Container>
      </div>


      <Container>

        {/* Core Features Starts */}
        <Row className="my-4">
          <Col md={12} className="d-flex justify-content-center align-items-center mt-4">
            <p className="fs-6 fw-bold d-flex justify-content-center align-items-center"><CgSmartphoneChip className={`${styles.colorRed} fs-4 me-2`} />Why Join Us</p>
          </Col>
          <Col md={12} className="d-flex justify-content-center align-items-center mb-3">
            <div>
              <h1 className="fw-bold">Our Core Values For You Know</h1>
            </div>
          </Col>
          <Row className="d-flex justify-content-center align-items-center ">

            <Col md={7} className="d-flex justify-content-center align-items-center mb-3">
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </Col>

            <Row className="d-flex justify-content-evenly align-items-center">
              {coreValues.map((e, i) => {
                return <CoreValuesPanel key={i} imgSrc={e.imgSrc} desc={e.desc} />
              })}
            </Row>

          </Row>

        </Row>
        {/* Core Features Ends */}

        {/* Vacancies Section Starts */}
        <Row className="my-4">
          <Col md={12} className="d-flex justify-content-center align-items-center mt-4">
            <p className="fs-6 fw-bold"><CgSmartphoneChip className={`${styles.colorRed} fs-4 me-2`} />Choose your path</p>
          </Col>

          <Col md={12} className="d-flex justify-content-center align-items-center mb-3">
            <div>
              <h1 className="fw-bold">Vacancies available</h1>
            </div>
          </Col>

          <Row className="d-flex justify-content-center align-items-center ">

            <Col md={7} className="d-flex justify-content-center align-items-center mb-3">
              <p className="text-center">We want to offer our team members personalized opportunities for growth, based on their level of experience. There is always room for development.
              </p>
            </Col>

          </Row>

        </Row>

        <Row className="d-flex justify-content-center align-items-center">

          {/*  */}
          {vacancies.map((e, i) => {
            return <VacancyPanel
              key={i}
              title={e.title}
              jobType={e.jobType}
              workExp={e.workExp}
              dateOpened={e.dateOpened}
              jobDesc={e.jobDesc}
              remoteJob={e.remoteJob}
            />

          })}
          {/*  */}
        </Row>
        {/* Vacancies Section Ends */}

      </Container>

      <Row className={`${styles.bgLightGrey} mt-4 pb-4`} >
        <Col md={12} className="d-flex justify-content-center align-items-center mt-4">
          <p className="fs-6 fw-bold">Stucked<FaQuestion className={`${styles.colorRed} `} /></p>
        </Col>
        <Col md={12} className="d-flex justify-content-center align-items-center mb-3">
          <div>
            <h1 className="fw-bold">Can&#39;t find what you&#39;re looking for?</h1>
          </div>
        </Col>
        <Row className="d-flex justify-content-center align-items-center ">

          <Col md={7} className="d-flex justify-content-center align-items-center mb-3">
            <p className="text-center">We&#39;re always looking for people with unique skills. Send us your CV
              and we&#39;ll get in touch when we have an opening that matches your expectations.
              Let&#39;s stay in touch by subscribing to our newsletter.
            </p>
          </Col>
          <Col md={12} className="d-flex justify-content-center align-items-center" >
            <button className={`${styles.applyBtn} mt-2 mb-4`}>Get in Touch.</button>
          </Col>
        </Row>

      </Row>
    </div>
  )
}

