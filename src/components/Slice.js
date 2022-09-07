import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


  
    function UncontrolledExample(item) {
    return (
      
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="/imgarticles/art7.png"
          alt="img"
          height="200px"
        />
         <Carousel.Caption>
          <h3 style={{color:'rgb(54, 10, 12)'}}>Text</h3>
          <p style={{color:'rgb(54, 10, 12)'}}>Description article</p>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="/imgarticles/art6.png"
          alt=""
          height="200px"
        />

        <Carousel.Caption>
        <h3 style={{color:'rgb(54, 10, 12)'}}>Text</h3>
          <p style={{color:'rgb(54, 10, 12)'}}>Description article</p></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="/imgarticles/art5.png"
          alt="Third slide"
          height="200px"
        />

<Carousel.Caption>
<h3 style={{color:'rgb(54, 10, 12)'}}>Text</h3>
          <p style={{color:'rgb(54, 10, 12)'}}>Description article</p></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="/imgarticles/art4.png"
          alt="Third slide"
          height="200px"
          
        />

        <Carousel.Caption>          
          <h3 style={{color:'rgb(54, 10, 12)'}}>Text</h3>
          <p style={{color:'rgb(54, 10, 12)'}}>Description article</p></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;