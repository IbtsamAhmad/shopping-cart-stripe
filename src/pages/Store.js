import React from "react";
import { Row, Col } from "react-bootstrap";

const Store = () => {
  return (
    <div>
      <h1>Welcome to the Store</h1>
      <Row xs={1} md={3} className="g4">
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Store;
