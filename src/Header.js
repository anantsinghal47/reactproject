import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";



const Header = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item header>
        <Image
          size="mini"
          src="https://react.semantic-ui.com/logo.png"
          style={{ marginRight: "1.5em" }}
        />
        Project Name
      </Menu.Item>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>About</Menu.Item>
      <Menu.Item>Contact</Menu.Item>
    </Container>
  </Menu>
);



export default Header;