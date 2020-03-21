import React from "react";
import styled from "styled-components";
import { Card } from "antd";

import Location from "../components/locations/Location";

/*
      <Container>
        <Label>Location Title</Label>
        <LargeText>Park</LargeText>
      </Container>
      <Container>
        <Label>Description</Label>
        <LargeText>
          Pleasant, peaceful city park that looks well used from a day of family
          gatherings.
        </LargeText>
      </Container>
*/

const Locations = () => {
  return (
    <div>
      <Location />
    </div>
  );
};

export default Locations;
