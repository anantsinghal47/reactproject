import React from "react";
import { Container, Menu, Segment } from "semantic-ui-react";

const FooterBottom = () => (
    <Segment fixed="bottom" inverted circular={false}>
      <Container>
        <Menu.Item>Copyright © 2023</Menu.Item>
      </Container>
    </Segment>
  );

 export default FooterBottom; 