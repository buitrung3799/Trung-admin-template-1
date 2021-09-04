import React from "react";
import { Table as RSTable } from "rsuite";

const { HeaderCell } = RSTable;

export function CustomHeaderCell(props) {
  const { children, ...rest } = props;
  return (
    <HeaderCell {...rest}>
      <b>{children.toUpperCase()}</b>
    </HeaderCell>
  );
}
export function Table(props) {
  const { children, ...rest } = props;
  return (
    <RSTable
      {...rest}
      hover
      affixHeader
      affixHorizontalScrollbar
      virtualized
      bordered
    >
      {children}
    </RSTable>
  );
}
