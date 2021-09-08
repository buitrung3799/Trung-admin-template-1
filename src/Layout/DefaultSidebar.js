import React from "react";
import { Sidenav, Nav, Dropdown, Icon, Divider } from "rsuite";
import { Link } from "react-router-dom";
export default function DefaultSidebar(props) {
  const { expand, handleSelectRoute, activeRoute } = props;
  return (
    <Sidenav
      activeKey={activeRoute}
      className={`main-sidebar ${expand ? "scrollable" : ""} `}
      style={{ width: expand ? 250 : 56 }}
      expanded={expand}
      appearance="subtle"
    >
      <Sidenav.Body>
        <Nav>
          <Nav.Item
            eventKey="home"
            componentClass={Link}
            to="/home"
            icon={<Icon icon="dashboard" />}
            onSelect={handleSelectRoute}
          >
            TRANG CHỦ
          </Nav.Item>
          <Nav.Item
            eventKey="2"
            componentClass={Link}
            to="/"
            icon={<Icon icon="group" />}
          >
            User Group
          </Nav.Item>
          <Nav.Item
            eventKey="3"
            componentClass={Link}
            to="/"
            icon={<Icon icon="group" />}
          >
            User Group
          </Nav.Item>
          <Nav.Item
            eventKey="2"
            componentClass={Link}
            to="/home"
            icon={<Icon icon="group" />}
          >
            User Group
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
            User Group
          </Nav.Item>
          <Dropdown eventKey="3" title="Advanced" icon={<Icon icon="magic" />}>
            <Dropdown.Item eventKey="3-1" icon={<Divider vertical />}>
              Geo
            </Dropdown.Item>
            <Dropdown.Item eventKey="3-2" icon={<Divider vertical />}>
              Devices
            </Dropdown.Item>
            <Dropdown.Item eventKey="3-3" icon={<Divider vertical />}>
              Loyalty
            </Dropdown.Item>
            <Dropdown.Item eventKey="3-4" icon={<Divider vertical />}>
              Visit Depth
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            eventKey="4"
            title="Settings"
            placement="rightStart"
            icon={<Icon icon="gear-circle" />}
          >
            <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
            <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
            <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
            <Dropdown.Menu eventKey="4-5" title="Custom Action">
              <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
              <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
              <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
              <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
              <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
              <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  );
}
