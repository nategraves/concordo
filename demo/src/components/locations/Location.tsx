import React, { FC, useState } from "react";
import styled from "styled-components";
import { Card, Row, Divider, Button, Carousel, Input } from "antd";

import { Location } from "../../types";

import map from "./map.png";
import park1 from "./park1.png";
import park2 from "./park2.png";
import park3 from "./park3.png";
import park4 from "./park4.png";

const Container = styled.div`
  margin: 1rem 0;
`;

const Label = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const LargeText = styled.div`
  font-size: 1.25rem;
  font-weight: normal;
  white-space: normal;
`;

const Flex = styled.div`
  display: flex;
`;

const GalleryModes = ["Photos", "Map"];

interface Props {
  location: Location;
}

const Location: FC<Props> = ({ location }) => {
  const [galleryMode, setGalleryMode] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(park1);

  const title = (
    <Flex style={{ alignItems: "flex-end", justifyContent: "space-between" }}>
      <div>
        <LargeText>{location.name}</LargeText>
        <Label>{location.address}</Label>
      </div>
      <Flex style={{ alignItems: "center" }}>
        {GalleryModes.map((m, i) => (
          <>
            <Label
              key={`Mode${i}-${m}`}
              onClick={() => setGalleryMode(i)}
              style={{
                cursor: "pointer",
                borderBottom: galleryMode === i ? "1px solid #000" : "none"
              }}
            >
              {m}
            </Label>
            {i < GalleryModes.length - 1 && (
              <Divider
                type="vertical"
                style={{
                  margin: "0 0.5rem",
                  background: "rgba(0, 0, 0, 0.5)"
                }}
              />
            )}
          </>
        ))}
      </Flex>
    </Flex>
  );

  return (
    <Card title={title} style={{ maxWidth: "25rem" }}>
      {galleryMode === 0 ? (
        <Carousel>
          <img src={park1} />
          <img src={park2} />
          <img src={park3} />
          <img src={park4} />
        </Carousel>
      ) : (
        <img src={map} style={{ maxWidth: "100%" }} />
      )}
      <Divider />
      <Flex
        style={{
          flexWrap: "nowrap",
          maxWidth: "100%",
          overflow: "hidden"
        }}
      >
        <Input />
        <Button type="primary">
          <Label>Comment</Label>
        </Button>
      </Flex>
    </Card>
  );
};

export default Location;
