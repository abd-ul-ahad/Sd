import { Image } from 'react-bootstrap';
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Career.module.css";


export function ServicesPanel({ imageSrc, imageAlt, title, desc }) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body text-center p-4" ><Image src={imageSrc} alt={imageAlt} width="50" />
                    <h4 className="card-title"><span style={{ "color": "rgb(25, 25, 25)" }}>{title}</span><br /></h4>
                    <p className="card-text"><span style={{ "color": "rgb(89, 89, 89)" }}>{desc}</span><br /></p>
                </div>
            </div>
        </div>
    )
}

export function VacancyPanel({ title, jobType, workExp, dateOpened, jobDesc, remoteJob }) {
    return (
        <Col md={11} className="my-4">
            <div className={`${styles.vacancyWrap} px-5 py-4`} >
                <Row>
                    <Col md={4} >
                        <h5 className={`${styles.vacancyTitle} my-3`}>{title}</h5>
                        <p className="my-2"><span className="fw-bold">Job Type</span>: {jobType}</p>
                        <p className="my-2"><span className="fw-bold">Work Experience</span>: {workExp}</p>
                        <p className="my-2"><span className="fw-bold">Date Opened</span>: {dateOpened}</p>
                    </Col>
                    <Col md={5} >
                        <p className="my-3"><span className="fw-bold">Job Description</span>:<br />{jobDesc}</p>
                        <p className="my-2"><span className="fw-bold">Remote Job</span>: {remoteJob}</p>
                    </Col>
                    <Col md={3} className="d-flex justify-content-md-center justify-content-sm-start align-items-center" >
                        <button className={`${styles.applyBtn} my-4`}>Apply</button>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export function CoreValuesPanel({ imgSrc, desc }) {
    return (
        <Col md={7} className={`${styles.coreWrap} ${styles.bgLightGrey} d-flex justify-content-center align-items-center my-3`}>
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <Image src={imgSrc} height={64} width={64} alt="client Expectations" />
                </Col>
                <Col md={10} className="d-flex justify-content-center align-items-center">
                    <p className="fw-bold">{desc}</p>
                </Col>
            </Row>
        </Col>
    )
}
