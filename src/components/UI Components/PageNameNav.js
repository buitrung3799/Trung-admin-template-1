import React from "react";
import { Grid, Row, Col, Button, ButtonToolbar } from "rsuite";

export function PageNameNav(props) {
  const { title, children } = props;
  return (
    <div className="page-name-nav bg-light-2">
      <Grid fluid>
        <Row>
          <Col lg={12}>
            <div className="page-name-container">
              <h6>{title.toUpperCase()}</h6>
            </div>
          </Col>
          <Col lg={12}>
            <div className="page-name-toolbar-container">{children}</div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
