import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { ApolloProvider } from "@apollo/react-hooks";

import Client from "./data/Client";
import Index from "./pages/Index";
import { CreateProject, AllProjects } from "./pages/projects";
import Departments from "./pages/departments/";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./components/Nav";

import "./App.css";

const { Content } = Layout;

const App = () => (
  <div className="App">
    <ApolloProvider client={Client}>
      <Layout>
        <Nav />
        <Content style={{ padding: "2rem" }}>
          <Switch>
            <Route path="/projects/create">
              <CreateProject />
            </Route>
            <Route path="/projects/list">
              <AllProjects />
            </Route>
            <Route path="/departments">
              <Departments />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </ApolloProvider>
  </div>
);

export default App;
