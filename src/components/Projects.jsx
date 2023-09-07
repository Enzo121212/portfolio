import React from 'react'
import Title from './Title'
import { Container, Row, Col, Card } from "react-bootstrap";
const Projects = () => {
  return (
        <>
            <Container>
                <Title name="Projets" widthTitle="200"/>
                <Row>
                    <Col  sm={6} md={4} lg={2}>
                        <Card >
                        <div className="d-flex justify-content-center align-items-center">
                            <Card.Img variant="top" src="https://picsum.photos/200/300"  style={{ width: '150px' }}/>
                        </div>
                        <Card.Body>
                        <Card.Title>Titre de la carte</Card.Title>
                        <Card.Text>
                            Description de la carte.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    </Col>
                </Row>
            </Container>
        </>
  )
}

export default Projects
