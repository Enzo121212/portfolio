import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Title from "./Title";
import "../assets/style.css";

const Competences = () => {
  const competences = [
    { title: "html", path: "html.png" },
    { title: "css", path: "css.png" },
    { title: "javascript", path: "js.png" },
    { title: "PHP", path: "php.png" },
    { title: "typescript", path: "typescript.png" },
    { title: "boostrap", path: "bootstrap.png" },
    { title: "angular", path: "angular.png" },
    { title: "react", path: "react.png" },
    { title: "laravel", path: "laravel.png" },
    { title: "C#", path: "csharp.png" },
    { title: "git", path: "git.png" },
    { title: "sql", path: "serveur-sql.png" },
    { title: "figma", path: "figma.png" },
    { title: "java", path: "java.png" },
    { title: "python", path: "python.png" },
  ];
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
