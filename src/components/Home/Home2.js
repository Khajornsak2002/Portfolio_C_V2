import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I possess a strong background in data science with foundational skills in 
              <br />
              <i>
                <b className="purple"> data analysis and problem-solving </b>
              </i>
              <br />
              <br />
              During my internship in web development at a government agency, I worked on designing, coding, 
              and maintaining responsive websites, collaborating with teams to optimize performance and ensure 
              user-friendly interfaces This experience enhanced my expertise in web development,&nbsp;
              <i>
                <b className="purple"> UX/UI design, and utilizing frameworks like Bootstrap and JavaScript libraries </b>  
                I am adaptable, work well under pressure, and am committed to continuous learning, enabling me to contribute to the 
                development of innovative solutions.{" "}
                
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Khajornsak2002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.facebook.com/aaon.khajornsak.7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aon_er2002/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
