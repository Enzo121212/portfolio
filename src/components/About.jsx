import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from './Title';
import '../assets/style.css';


export default function About() {
  const experiences = [
    { label: "Web Design", pourcent: "90" },
    { label: "Web Developpement", pourcent: "98" },
    { label: "App Developpement", pourcent: "96" },
  ];
  return (
    <>
      <Container className="text-center">
        <Title name="A PROPOS" widthTitle="300" />
        <Row className="about-container ">
          <Col sm={6}>
            <img src="/images/done.png" alt="Done" />
          </Col>
          <Col sm={6} className="mt-2">
            <p className="about-paragraphe mx-5 ">
              Je suis un développeur passionné et créatif spécialisé dans le
              développement fullstack. Mon parcours dans le monde du
              développement a été marqué par une fascination pour la création de
              solutions techniques innovantes et conviviales.
            </p>
            <br />
            <div>
              {experiences.map((item, index) => (
                <div key={index}>
                  <label className="about-label d-flex justify-content-start mx-5">
                    {item.label}
                  </label>
                  <div className="progress mx-5 mt-2">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: `${item.pourcent}%` }}
                      aria-valuenow={item.pourcent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="about-pourcent mt-1 d-flex justify-content-end mx-5">
                    {item.pourcent}%
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-start mx-5 ">
              <button type="button" className="btn btn-custom">
                Telecharger CV
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
