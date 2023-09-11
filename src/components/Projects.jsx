import React from 'react'
import Title from './Title'
import { Container, Row, Col, Card } from "react-bootstrap";
const Projects = () => {
    const projects = [
        { title: "Gestion livraison", description:"Angular 14 , mongoDB", path: "html.png" },
        { title: "Ressources humaines", description:"React , spring boot", path: "html.png" },
        { title: "Immobilier", description:"Laravel", path: "html.png" },
        { title: "Immobilier", description:"Laravel", path: "html.png" },
        { title: "Immobilier", description:"Laravel", path: "html.png" },
    ]
  return (
    <>
      <Container>
        <Title name="Projets" widthTitle="200" />
        <Row>
          {projects.map((project, index) => (
            <Col key={index} sm={6} md={2} lg={2}>
              <Card border="light">
                <div className="d-flex justify-content-center align-items-center">
                  <Card.Img
                    variant="top"
                    className="w-50"
                    src="https://picsum.photos/200/300"
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{ project.title }</Card.Title>
                  <Card.Text>{ project.description }</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Projects
