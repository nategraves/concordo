import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const { SubMenu, Item } = Menu;

const Nav = () => {
  return (
    <Menu mode="horizontal">
      <SubMenu title="Projects">
        <Item>
          <Link to="/projects/list">View All</Link>
        </Item>
        <Item>
          <Link to="/projects/create">Create</Link>
        </Item>
      </SubMenu>
      <Item>
        <Link to="/departments">Departments</Link>
      </Item>
    </Menu>
  );
};

export default Nav;
