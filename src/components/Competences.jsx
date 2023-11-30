import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Title from "./Title";
import "../assets/style.css";
import {competences} from '../data/data.js'

const Competences = () => {

  return (
    <>
      <Container data-aos="zoom-in-up" id="competences" className="mt-2">
        <Title name="COMPETENCES" widthTitle="400" />
        <Row>
          {competences.map((competence, index) => (
            <Col key={index} sm={6} md={4} lg={2} className="m-2 mb-3">
              <Card border="light" >
                <div className="d-flex justify-content-center align-items-center" >
                  <Card.Img
                    variant="top"
                    src={`images/${competence.path}`} // Utilisation de l'attribut path de l'objet
                    style={{ width: "150px", height: "150px" }}
                    alt={competence.title.toUpperCase()}
                  />
                </div>
                <Card.Body>
                  <Card.Text className="title-competences">
                    {competence.title.toUpperCase()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Competences;
