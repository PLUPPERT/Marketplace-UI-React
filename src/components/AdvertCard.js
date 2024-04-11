import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { advertData } from "../data";

const AdvertCard = (props) => {
  const { searchInput } = props;

  return (
    <Container style={{ paddingBottom: "0px" }}>
      <Row>
        {advertData.map((data) => {
          let value = searchInput.toUpperCase().trimStart().trimEnd();
          let display = data.title.toUpperCase().startsWith(value)
            ? ""
            : "none";

          const cardElement = (
            <Col className="col-4" style={{ display: display }}>
              <Card
                className="mb-3"
                style={{
                  border: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image
                  className="card-img-top"
                  src={data.image}
                  alt={data.title}
                />
                <Card.Body style={{ paddingBottom: "0px" }}>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                  <Card.Text
                    onClick={() => alert(data.contact)}
                    style={{ cursor: "pointer" }}
                  >
                    Contact: ***
                  </Card.Text>
                  <Container
                    className="bg-light py-2 mb-1 d-flex justify-content-center"
                    style={{
                      boxShadow: "0px -2px 0px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Button variant="info" onClick={() => alert(data.contact)}>
                      Details
                    </Button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          );
          return cardElement;
        })}
      </Row>
    </Container>
  );
};

export default AdvertCard;
