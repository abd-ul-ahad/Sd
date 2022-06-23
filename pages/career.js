import styles from "../styles/Career.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { CgSmartphoneChip } from "react-icons/cg";
import { FaQuestion } from "react-icons/fa";
import Head from "next/head";
import { Image } from 'react-bootstrap';


export default function Career() {
  let vacancies = [
    {
      title: "Senior Data Engineer",
      jobType: "Full time",
      workExp: "2-3 Years",
      dateOpened: "dd/mm/yyyy",
      jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      remoteJob: "Yes"
    }
  ]

  let coreValues = [
    {
      imgSrc: "/images/career/clientSatis.png",
      desc: "Exceed Clients’ And Colleagues’ Expectations"
    },
    {
      imgSrc: "/images/career/man-robot.svg",
      desc: "Act In A Way That Makes All Of Us Proud"
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
          <div >
            <h1 className={styles.textLarge} >Looking For career?</h1>
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

            {coreValues.map((e, i) => {
              return (
                <Col key={i} md={7} className={`${styles.coreWrap} ${styles.bgLightGrey} d-flex justify-content-center align-items-center my-3`}>
                  <Row className="d-flex justify-content-center align-items-center">
                    <Col md={2} className="d-flex justify-content-center align-items-center">
                      <Image src={e.imgSrc} height={64} width={64} alt="client Expectations" />
                    </Col>
                    <Col md={10} className="d-flex justify-content-center align-items-center">
                      <p className="fw-bold">{e.desc}</p>
                    </Col>
                  </Row>
                </Col>
              )
            })}



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
            return (
              <Col key={i} md={11} className="my-4">
                <div className={`${styles.vacancyWrap} px-5 py-4`} >
                  <Row>
                    <Col md={4} >
                      <h5 className={`${styles.vacancyTitle} my-3`}>{e.title}</h5>
                      <p className="my-2"><span className="fw-bold">Job Type</span>: {e.jobType}</p>
                      <p className="my-2"><span className="fw-bold">Work Experience</span>: {e.workExp}</p>
                      <p className="my-2"><span className="fw-bold">Date Opened</span>: {e.dateOpened}</p>
                    </Col>
                    <Col md={5} >
                      <p className="my-3"><span className="fw-bold">Job Description</span>:<br />{e.jobDesc}</p>
                      <p className="my-2"><span className="fw-bold">Remote Job</span>: {e.remoteJob}</p>
                    </Col>
                    <Col md={3} className="d-flex justify-content-md-center justify-content-sm-start align-items-center" >
                      <button className={`${styles.applyBtn} my-4`}>Apply</button>
                    </Col>
                  </Row>
                </div>
              </Col>
            )
          })}
          {/*  */}
        </Row>
        {/* Vacancies Section Ends */}

      </Container>

      <Row className={`${styles.bgLightGrey} my-4`} >
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
              Let&#39;s stay in touch
            </p>
          </Col>
          <Col md={12} className="d-flex justify-content-center align-items-center" >
            <button className={`${styles.applyBtn} mt-2 mb-4`}>Get in Touch</button>
          </Col>
        </Row>

      </Row>
    </div>
  )
}

