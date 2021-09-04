import React from "react";
import { Navbar, Nav, Icon, IconButton, Badge, Whisper, Popover , List , FlexboxGrid } from "rsuite";
import { Button } from "../components/UI Components/Button";
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
            <Whisper
              trigger="click"
              preventOverflow
              placement="bottomEnd"
              speaker={
                <Popover title="THÔNG BÁO">
                  <div className="notification-container ">
                    <div className="notification-body scrollable">
                      <List hover autoScroll>
                        {/* {notiList.map((item, id) => (
                          <List.Item key={id}>
                            <FlexboxGrid justify="space-between" align="middle">
                              <FlexboxGrid.Item colspan={22}>
                                {item.title}
                              </FlexboxGrid.Item>
                              <FlexboxGrid.Item colspan={2}>
                                {item.status === "new" && (
                                  <Badge className="bg-green" />
                                )}
                              </FlexboxGrid.Item>
                            </FlexboxGrid>
                          </List.Item>
                        ))} */}
                      </List>
                    </div>
                    <div className="notification-footer">
                      <Button
                        block
                        mainColor="blue"
                      >
                        Xem toàn bộ thông báo
                      </Button>
                    </div>
                  </div>
                </Popover>
              }
            >
            <Nav.Item
              eventKey="2"
              icon={
                <Badge style={{marginRight: 5}} content={99}>
                  <Icon icon="bell" size="lg" />
                </Badge>
              }
            ></Nav.Item>
            </Whisper>
            <Nav.Item icon={<Icon icon="th2" size="lg" />}></Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
}
