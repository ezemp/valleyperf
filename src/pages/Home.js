
import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Home = () => (
    <div>
        <Hero backgroundImage="../../public/images/header.jpg">
        </Hero>
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                <h1>Welcome To Valley Perforating</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <p>Your precision machining needs are our business. Our specialty is providing state-of-the-art technology to guarantee your work is done with accuracy and efficiency.</p>

<p>Dedicated to achieving excellence in every product and service we provide. Valley's goal is to continuously improve quality.</p>

<p>Petroleum Connection threading services readily available to meet your 24/7 well applications and drilling needs. Houston International Specialties and Valley Perforating have aligned a commitment to provide premium connection technologies to the West Coast Region at competitive pricing and readily available machining services.</p>

<p>Call Valley Perforating today to discuss your machining needs, or for a quote.</p>

<p>We look forward to working with you.</p>
                </Col>
            </Row>
        </Container>
  </div>
);
export default Home;

