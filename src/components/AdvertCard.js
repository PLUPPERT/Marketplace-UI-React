import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { advertData } from "../data";

const AdvertCard = (props) => {
  return (
    <Container>
      <Row>
        <Col className="col-4">
          <Card className="mb-3">
            <Image
              className="card-img-top"
              src={advertData[0].image}
              alt={advertData[0].title}
            />
          </Card>
        </Col>
        <Col className="col-4">
          <Card className="mb-3">
            <Image
              className="card-img-top"
              src={advertData[0].image}
              alt={advertData[0].title}
            />
          </Card>
        </Col>
        <Col className="col-4">
          <Card className="mb-3">
            <Image
              className="card-img-top"
              src={advertData[0].image}
              alt={advertData[0].title}
            />
          </Card>
        </Col>
        <Col className="col-4">
          <Card className="mb-3">
            <Image
              className="card-img-top"
              src={advertData[0].image}
              alt={advertData[0].title}
            />
          </Card>
        </Col>
        <Col className="col-4">
          <Card className="mb-3">
            <Image
              className="card-img-top"
              src={advertData[0].image}
              alt={advertData[0].title}
            />
          </Card>
        </Col>
        <Col className="col-4">
          <Card className="mb-3">
            <Image
              className="card-img-top"
              src={advertData[0].image}
              alt={advertData[0].title}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdvertCard;
