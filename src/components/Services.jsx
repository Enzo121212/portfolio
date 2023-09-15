import React from "react";
import { BsLaptop ,BsSearch,BsPeopleFill } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";


export default function Services() {
    const quality = [
        { title: 'Compétence technique', icon: <BsLaptop />, description: 'Maîtrise des langages de programmation, des frameworks, des outils et des technologies pertinents. Capable de créer des sites web fonctionnels et bien conçus.' },
        { title: 'Résolution de problèmes', icon: <BsSearch/>, description: 'Capable de résoudre des problèmes, trouver des solutions efficaces et débugger des problèmes rapidement.' },
        { title: 'Adaptabilité', icon: <BiRefresh/>, description: 'S\'adapter aux nouvelles technologies et aux changements.' },
        { title: 'Travail d\'équipe', icon: <BsPeopleFill/>, description: 'Collaborer efficacement avec d\'autres membres de l\'équipe, y compris les designers, les gestionnaires de projet et les autres développeurs.' },
    ];
  return (
    <>
      <div className="service" id="service">
        <div className="container">
          <div
            className="section-header text-center wow zoomIn"
          >
            <p>Qualités</p>
            <h2>Mes qualités</h2>
          </div>
          
        <div className="row">
            {quality.map((item, index) => (
                <div className="col-lg-6" key={index}>
                    <div className="service-item">
                        <div className="service-icon">
                            {/* <i className={item.icon}></i> */}
                            
                            {item.icon}
                        </div>
                        <div className="service-text">
                            <h3>{item.title}</h3>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        </div>
      </div>
    </>
  );
}
