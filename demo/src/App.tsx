import React from "react";
import { Layout, Divider } from "antd";
import styled from "styled-components";

import Routes from "./routing/Routes";
import { DepartmentMenu } from "./components/navigation";

const { Sider, Content } = Layout;

const Logo = styled.span`
  display: inline-block;
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  text-transform: uppercase;
`;

const App = () => (
  <Layout style={{ width: "100%", height: "100%" }}>
    <Sider style={{ padding: "2rem 1rem", height: "100%", color: "#fff" }}>
      <Logo>Concordo</Logo>
      <DepartmentMenu />
      <Divider />
    </Sider>
    <Content style={{ padding: "2rem 1rem", height: "100%" }}>
      <Routes />
    </Content>
  </Layout>
);

export default App;
