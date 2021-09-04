import React from "react";
import { Navbar, Nav, Icon, IconButton, Badge, Whisper, Popover } from "rsuite";
// ====================================================
export default function DefaultNavbar(props) {
  const { handleExpand } = props;
  return (
    <div className="main-navbar">
      <Navbar appearance="subtle">
        <Navbar.Header>
          <div className="navbar-header">
            <div className="bar-button">
              <IconButton
                circle
                icon={<Icon icon="bars" size="4x" />}
                size="lg"
                appearance="subtle"
                onClick={handleExpand}
              />
            </div>
            <div className="logo-container">
              <p className="navbar-brand logo">LOGO HERE</p>
            </div>
          </div>
        </Navbar.Header>
        <Navbar.Body>
          <Nav pullRight>
            <Nav.Item
              eventKey="1"
              icon={<Icon icon="user-circle-o" size="lg" />}
            ></Nav.Item>
            <Nav.Item
              eventKey="2"
              icon={
                <Badge style={{marginRight: 5}} content={99}>
                  <Icon icon="bell" size="lg" />
                </Badge>
              }
            ></Nav.Item>
            <Nav.Item icon={<Icon icon="th2" size="lg" />}></Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
}
