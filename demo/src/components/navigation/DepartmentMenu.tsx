import React, { Fragment } from "react";
import { Menu, Badge, Typography } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { DeparmentRoutes } from "./DepartmentRoutes";

const { Item } = Menu;
const { Text } = Typography;

const StyledText = styled(Text)`
  color: rgba(255, 255, 255, 0.9) !important;
  display: block;
  font-size: 14px !important;
  margin-top: 1rem;
  text-transform: uppercase;
`;

const StyledMenu = styled(Menu)`
  background: transparent;
  border-right: none;
  margin: 1rem 0;
`;

const StyledBadge = styled(Badge)`
  margin-right: 0.5rem;

  .ant-badge-count {
    background: rgba(255, 255, 255, 0.33);
    box-shadow: none;
    -webkit-box-shadow: none;
  }
`;

const StyledItem = styled(Item)`
  align-items: center;
  color: rgba(255, 255, 255, 1);
  display: flex;
  padding: 0.5rem 0;
  transition: all 0.25s ease-in-out;
  margin-bottom: 0.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }

  &:active,
  &:selected {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Spacer = styled.div`
  flex: 0 0 2.75rem;
`;

const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 1) !important;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.75) !important;
    margin-left: 3px;
  }
`;

const DepartmentMenu = () => (
  <Fragment>
    <StyledText>Departments</StyledText>
    <StyledMenu selectable={false}>
      {DeparmentRoutes.map(({ count, path, label }) => (
        <StyledItem>
          <Spacer>
            <StyledBadge count={count} />
          </Spacer>
          <StyledLink to={path}>{label}</StyledLink>
        </StyledItem>
      ))}
    </StyledMenu>
  </Fragment>
);

export default DepartmentMenu;
