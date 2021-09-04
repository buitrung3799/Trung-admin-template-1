import React from "react";
import { Panel as RSPanel } from "rsuite";

export function Panel(props) {
  const { children, ...rest } = props;
  return (
    <RSPanel className="custom-panel" {...rest}>
      {children}
    </RSPanel>
  );
}
