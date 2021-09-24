import React from "react";
import {
  Table,
  HeaderCell,
  Cell,
  Column,
} from "../../components/UI Components";
import { IconButton, Icon } from "rsuite";
// =====================================================================

export default function MainTable(props) {
  const { data, loading } = props;
  return (
    <div>
      <Table data={data} loading={loading} rowHeight={80} height={1000}>
        <Column width={50} align="center" verticalAlign="middle">
          <HeaderCell>STT</HeaderCell>
          <Cell>1</Cell>
        </Column>
        <Column width={200} align="center" verticalAlign="middle">
          <HeaderCell>User</HeaderCell>
          <Cell>1</Cell>
        </Column>
        <Column width={200} align="center" verticalAlign="middle">
          <HeaderCell>Email</HeaderCell>
          <Cell>1</Cell>
        </Column>
        <Column width={100} align="center" verticalAlign="middle">
          <HeaderCell>Role</HeaderCell>
          <Cell>1</Cell>
        </Column>
        <Column width={450} align="center" verticalAlign="middle">
          <HeaderCell>Groups</HeaderCell>
          <Cell>1</Cell>
        </Column>
        <Column width={150} align="center" verticalAlign="middle">
          <HeaderCell>Joined Date</HeaderCell>
          <Cell>1</Cell>
        </Column>
        <Column width={70} align="center" verticalAlign="middle">
          <HeaderCell></HeaderCell>
          <Cell>
            <IconButton circle icon={<Icon icon="arrow-down" />} />
          </Cell>
        </Column>
      </Table>
    </div>
  );
}
