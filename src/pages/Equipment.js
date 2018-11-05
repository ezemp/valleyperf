
import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Equipment = () => (
    <div>
        <Hero backgroundImage="../../public/images/header.jpg">
        </Hero>
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                <h1>Equipment</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <p>1      Okuma 14" hollow spindle CNC lathe</p>
                    <p>1      Okuma 10.8" hollow spindle CNC lathe</p>
                    <p>1      Romi 6.7" hollow spindle CNC lathe</p>
                    <p>2      CNC milling centers</p>
                    <p>4      121/4" hollow spindle lathes</p>
                    <p>6      Allen Mill slotting machines</p>
                    <p>2      40 Spindle round hole perforating machines</p>
                    <p>2      Tool makers milling machines</p>
                    <p>1      Computer torque readout bucking machine</p>
                </Col>
            </Row>
        </Container>
  </div>
);
export default Equipment;