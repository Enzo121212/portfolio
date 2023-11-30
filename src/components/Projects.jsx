import React , {useState} from 'react'
// import Title from './Title'
// import { Container, Row, Col, Card } from "react-bootstrap";
import {portfolio} from '../data/data.js'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Projects = () => {

  const [projects, setProjects] = useState(portfolio);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const [modalShow, setModalShow] = useState(false);

  const [details, setdetails] = useState({})

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setProjects(portfolio);
    } else {
      const filteredProjects = portfolio.filter((project) => project.specify === category);
      setProjects(filteredProjects);
    }
  };
  
  const viewDetails = (item)=>{
    setModalShow(true)
    setdetails(item)
  }



  return (
    <>
          <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Portfolio</p>
                    <h2>Projets</h2>
                </div>
                <div className="row portfolio-container">
                      <div className="col-12">
                          <ul id="portfolio-filter">
                            <li className={selectedCategory === 'All' ? 'filter-active' : ''} onClick={() => handleFilterClick('All')}>All</li>
                            <li className={selectedCategory === 'web' ? 'filter-active' : ''} onClick={() => handleFilterClick('web')}>Web Apps</li>
                            <li className={selectedCategory === 'mobile' ? 'filter-active' : ''} onClick={() => handleFilterClick('mobile')}>Mobile Apps</li>
                            <li className={selectedCategory === 'apps' ? 'filter-active' : ''} onClick={() => handleFilterClick('apps')}>Desktop Apps</li>
                          </ul>
                      </div>
                   {projects.map((project, index) => (
                      <div key={index} className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" >
                          <div className="portfolio-wrap">
                              <div className="portfolio-img">
                                  <img src={`images/${project.path}`}  alt="Image"/>   
                              </div>
                              <div className="portfolio-text text-center pointer"  onClick={() => viewDetails(project)}>
                                  <h3>
                                    {project.title}<br/>
                                    <span className='text-technologie'> {project.technologie}</span>
                                  </h3>    
                              </div>
                          </div>
                      </div>
                    ))}
        
                </div>
            </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          details= {details}
      />
    </>
  );
};

function MyVerticallyCenteredModal({ show, onHide, details }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header > */}
      <Modal.Body className='disable-selection'>
        <div className='row' style={{padding:'15px'}}>
            <div className='col-sm-12 col-md-6 d-flex align-items-center'>
              <img src="images/ecommerce.jpg"   alt="Image"  width="360px"/>   
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className='mb-3'>
                <span>{details.title}</span>
                <h4>Developpement front & back</h4>
              </div>
              <p style={{ textAlign: 'justify' }}>
                  {details.description}
              </p>

              <p>
                  Technologie : {details.technologie}
              </p>
              
              <p>
                  Role : full stack
              </p>
            </div>

        </div>
        <div style={{textAlign:'end'}}>
            <Button className='btn btn-danger' onClick={onHide}>Fermer</Button>
        </div>
      
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Fermer</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default Projects
