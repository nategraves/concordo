import React from "react";
import { Row, Col, Card } from "antd";

import { Item } from "../types";

const Review = () => {
  const items: Item[] = [
    {
      id: "b4e46b07-abb1-4a04-85b6-7dd7b50fb3ce",
      name: "ALISON BECKER",
      description: '1ST CHOICE WIFE "CHRYSLER/TOY STORY"',
      mediaUrls: [
        "https://v02w.cdn1.lacasting.com.castingnetworks.io/V02/175928/hires/766F48CB-1B4E-4C36-81C5-C83D15184843-835-00001AD0E0762AF9.m4v"
      ],
      thumbnailUrl:
        "https://p02.lacasting.com.castingnetworks.io/actor-big/175692/a5cc9f46-b68e-4f00-b1a7-84aeac12ecbd.jpg"
    }
  ];
  return (
    <Row gutter={16}>
      {items.map(i => (
        <Col span={8}>
          <Card hoverable cover={<img alt={i.name} src={i.thumbnailUrl} />} />
        </Col>
      ))}
    </Row>
  );
};

export default Review;
