import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Contact.module.css";


export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact | SayabiDevs</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <div style={{ "backgroundColor": "#E71B1E" }} >
                <Container className="py-5 mb-5">

                    <h2 className="text-white fw-bold text-center my-5 py-5">
                        Describe your work and<br />Fill this contact form.
                    </h2>

                </Container>
            </div>

            <Container>

                <Row>
                    <Col lg={8}>
                        <ContactForm />
                    </Col>
                    <Col lg={4}>

                        <ContactAddress />

                    </Col>
                </Row>

            </Container>

        </div>
    )
}


const ContactForm = () => {
    return (
        <form className={`${styles.contactFormYAxis} bg-white px-5 py-3`} >
            <Row className="d-flex justify-content-between align-items-center">
                <Col lg={6}>
                    <input className={`w-100 my-3 py-2 px-3 ${styles.inputStyles}`} type="text" placeholder="Name" />
                </Col>
                <Col lg={6}>
                    <input className={`w-100 my-3 py-2 px-3 ${styles.inputStyles}`} type="text" placeholder="Email" />

                </Col>
                <Col lg={6}>
                    <input className={`w-100 my-3 py-2 px-3 ${styles.inputStyles}`} type="text" placeholder="Contact Number" />
                </Col>
                <Col lg={6}>
                    <input className={`w-100 my-3 py-2 px-3 ${styles.inputStyles}`} type="text" placeholder="Subject" />
                </Col>
            </Row>

            <div className="d-flex justify-content-between align-items-center">

                <textarea style={{ "resize": "none" }} className={`w-100 my-3 py-2 px-3 ${styles.inputStyles}`} rows={8} cols={88} placeholder="Message" ></textarea>
            </div>


            <div>
                <button onClick={e => { e.preventDefault() }} className={`${styles.messageBtn} my-4`}>Send</button>
            </div>
        </form>
    )
}

const ContactAddress = () => {
    return (
        <div className={`${styles.contactAddressWrap} py-4 px-4 mb-5`}>
            <div className="my-3">
                <h5 className="fw-bold">Office Address:</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus porro architecto modi recusandae, molestiae.</p>
            </div>

            <div className="my-3">
                <h5 className="fw-bold">Contact:</h5>

                <div className="my-3">
                    <p className="fw-bold">Contact Number: </p>
                    <p className={styles.marginLeft}>+92 00000000000</p>
                </div>

                <div className="my-3">

                    <p className="fw-bold">Email: </p>
                    <p className={styles.marginLeft}><a className={styles.emailStyles} href={`mailto: ${process.env.NEXT_CONTACT_EMAIL}`}>email@someone.com</a></p>
                </div>
            </div>

            <div className="my-3">
                <h5 className="fw-bold">Working Hours:</h5>
                <p className="fw-bold mt-3">Monday - Friday: </p>
                <p className={styles.marginLeft}>9:00 AM to 5:00 PM</p>
            </div>
        </div>
    )
}