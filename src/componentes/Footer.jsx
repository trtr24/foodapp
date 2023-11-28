import React from 'react'
import { ListGroup, Container } from "reactstrap";
import "./footer.css";
import logo from './imagenes/LogoF.png'

const Footer = () => {
  return (
    
    <footer className="flex flex-col md:flex w-full h-full items-center justify-between text-start align-middle bg-orange-300 gap-[8rem]">
      <Container>
        <div className="logo footer__logo text-black-500">
          <img src={logo} alt="logo" />
          <h5>UniFood</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est.</p>
        </div>
        <div>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Friday - Tuesday</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Wednesday - Thursday</span>
            <p>Off day</p>
          </div>
        </ListGroup>
        </div>
      </Container>
    </footer>
  );
};


export default Footer