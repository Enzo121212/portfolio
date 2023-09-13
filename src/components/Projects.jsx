import React from 'react'
import Title from './Title'
import { Container, Row, Col, Card } from "react-bootstrap";
const Projects = () => {
    const projects = [
        // { title: "Gestion livraison", description:"Angular 14 , mongoDB", path: "html.png" },
        // { title: "Ressources humaines", description:"React , spring boot", path: "html.png" },
        { title: "Ressoures humaines", description:"Laravel", path: "ecommerce.jpg" },
        { title: "E-commerce", description:"Laravel", path: "rh.jpg" },
        { title: "Site vitrine", description:"Laravel", path: "vitrine.jpg" },
    ]
  return (
    <>
      {/* <Container>
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
      </Container> */}
          <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Portfolio</p>
                    <h2>Projets</h2>
                </div>
                <div className="row portfolio-container">
                   {projects.map((project, index) => (
                      <div key={index} className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" >
                          <div className="portfolio-wrap">
                              <div className="portfolio-img">
                                  <img src={`images/${project.path}`}  alt="Image"/>   
                              </div>
                              <div className="portfolio-text text-center">
                                  <h3>{project.title}</h3>
                              </div>
                          </div>
                      </div>
                    ))}
        
                </div>
            </div>
        </div>
    </>
  );
};

export default Projects
