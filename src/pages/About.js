import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
    <div>
      <Hero backgroundImage="../../public/images/header.jpg">
      </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p>Valley Perforating originated as part of the facility known as Servco Services.  In 1968, Smith International bought Servco and phased out perforating in 1969.</p>
          <p>The perforating shop remained in Bakersfield and in 1970 began to operate under the name Valley Perforating Company. Since buying the company, the new owners have upgraded the company's equipment and capabilities.  In 2005, Mike Dover, an employee of 27 years, and partner purchased the company.</p>
          <p>Valley Perforating is committed to continual improvement to satisfy our customer's needs. We are now an API 5CT approved facility with ISO 9002 quality procedures, and have added CNC mill and threading equipment. Our shop operates 24 hours per day to better serve our customers.</p>
        <dl class="dl-horizontal">
            <dt>President:</dt>
            <dd>Mike Dover</dd>
            <dt>Shop Forman:</dt>
            <dd>Rick Munoz</dd>
            <dt>Perforations Foreman:</dt>
            <dd>Alex Navarro</dd>
            <dt>CNC Operations Manager:</dt>
            <dd>Ray Looney</dd>
            <dt>Quality Assurances Manager:</dt>
            <dd>Ray Looney</dd>
            <dt>Tools Foreman:</dt>
            <dd>Chris Lucas</dd>
            <dt>Sales And Inventory:</dt>
            <dd>John Boyles</dd>
        </dl>
        <div className="Mission">
            <h1>Mission Statement</h1>
            <p>Valley Perforating is dedicated to achieving excellence in every product and service we provide, and to provide these at the best possible price.
            Our goal is to be a leader in machining in central California through continuous commitment to quality and satisfying the needs of our customers.</p>
        </div>
        </Col>
        <Col size = "md-6">
        </Col>
      </Row>
    </Container>
  </div>
);
 
export default About;