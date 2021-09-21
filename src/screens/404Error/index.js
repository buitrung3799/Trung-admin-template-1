import React from "react";
import { Button } from "../../components/UI Components";
import { Icon } from "rsuite";
export default function ErrorPage(props) {
  return (
    <div>
      <div className="error-container"></div>
      <div className="error-description">
        <h4>URL yêu cầu không được tìm thấy trên máy chủ này.</h4>
        <Button
          appearance="ghost"
          color="blue"
          size="lg"
          style={{ margin: "auto" }}
          onClick={() => props.history.goBack()}
        >
          <Icon icon="long-arrow-left" /> &nbsp; Quay lại trang trước
        </Button>
      </div>
    </div>
  );
}
