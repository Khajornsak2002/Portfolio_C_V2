import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiLaragon,
  SiProxmox ,
  SiTruenas ,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <FaWindows  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visualstudiocode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Laragon">
        <SiLaragon />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Proxmox">
        <SiProxmox  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Truenas">
        <SiTruenas   />
      </Col>
    </Row>
  );
}

export default Toolstack;
