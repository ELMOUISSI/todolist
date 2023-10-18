import React from 'react';
import '../styles/Services.css';

function Services() {
  return (
    <section id="services" className="services ">
      <div className="container row">
         <h1>Services</h1>
        <div className='col-4'>
          <h4>Web Development</h4>
          <div>
            <img src="../images/webdev.jpg" alt="" />
            <br/>
            <button className='btn btn-primary'> click</button>
          </div>
          </div>
          <div className='col-4'>
          <h4> Front-end Development</h4>
          <div>
            <img src="../images/webdev.jpg" alt="" />
            
            <br/>
            <button className='btn btn-primary'> click</button>
          </div>
          </div>
          <div className='col-4'>
          <h4>Back-end Development</h4>
          <div>
            <img src="../images/webdev.jpg" alt="" />
            <br/>
            <button className='btn btn-primary'> click</button>

          </div>
        </div>
        </div>
    </section>
  );
}

export default Services;
