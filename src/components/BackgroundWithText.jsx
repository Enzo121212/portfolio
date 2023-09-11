import React from 'react';
import Container from 'react-bootstrap/Container';


const BackgroundWithText = () => {
  return (<>
    <div className='containerBgWithText my-5'>
        <div className="overlay">
        <Container  >
            <div className='contentWrapper'>
            Je suis un développeur passionné et créatif spécialisé dans le
              développement fullstack. Mon parcours dans le monde du
              développement a été marqué par une fascination pour la création de
              solutions techniques innovantes et conviviales.
            </div>
        </Container>
        </div>

    </div>
  </>

);
}

export default BackgroundWithText
