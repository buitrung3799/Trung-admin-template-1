import React from "react";
import { Grid, Row, Col } from "rsuite";
import {
  StatisticalCard,
  Panel,
  PageNameNav,
  Table,
  HeaderCell,
} from "../components/UI Components";
import { Line, Bar } from "react-chartjs-2";
const { Cell, Column } = Table;
// ==========================================
export default function DefaultContent(props) {
  const { children } = props;
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "#6b48ff",
        borderColor: "#6b48ff",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const data2 = {
    labels: ["T2", "T3", "T4", "T5", "T6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#4e73df",
          "#4e73df",
          "#4e73df",
          "#4e73df",
          "#4e73df",
        ],
        borderColor: ["#4e73df", "#4e73df", "#4e73df", "#4e73df", "#4e73df"],
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <PageNameNav title="Trang chủ"></PageNameNav>
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col lg={6}>
              <StatisticalCard
                icon="order-form"
                cardColor="blue"
                title="ĐƠN HÀNG"
              >
                <p>999 đơn hàng đang chờ duyệt</p>
                <p>999 đơn hàng đã hoàn thành</p>
              </StatisticalCard>
            </Col>
            <Col lg={6}>
              <StatisticalCard
                icon="building2"
                cardColor="green"
                title="SẢN XUẤT"
              >
                <p>999 định mức đang chờ duyệt</p>
                <p>999 định mức đã duyệt</p>
              </StatisticalCard>
            </Col>
            <Col lg={6}>
              <StatisticalCard icon="trend" cardColor="yellow" title="THU NHẬP">
                <p>999 đơn hàng đang chờ duyệt</p>
                <p>999 đơn hàng đã hoàn thành</p>
              </StatisticalCard>
            </Col>
            <Col lg={6}>
              <StatisticalCard
                icon="dashboard"
                cardColor="purple"
                title="CHẤT LƯỢNG HÀNG HÓA"
              >
                <p>999 sản phẩm đang chờ duyệt</p>
                <p>999 sản phẩm đã duyệt</p>
              </StatisticalCard>
            </Col>
          </Row>
          <div style={{ marginTop: 15 }}>
            <Row>
              <Col lg={12}>
                <Panel header="Thu nhập trong quý" shaded>
                  <Line data={data} options={options} />
                </Panel>
              </Col>
              <Col lg={12}>
                <Panel header="Biểu đồ tồn kho" shaded>
                  <Bar data={data2} options={options2} />
                </Panel>
              </Col>
            </Row>
          </div>
          <div style={{ marginTop: 15 }}>
            <Row>
              <Col lg={14}>
                <Panel header="Danh sách nhân viên" shaded>
                  <Table data={[]}>
                    <Column width={250} align="center" verticalAlign="middle">
                      <HeaderCell>Họ và tên</HeaderCell>
                      <Cell></Cell>
                    </Column>
                  </Table>
                </Panel>
              </Col>
              <Col lg={10}>
                <Panel header="Dự án đang triển khai" shaded>
                  <Table data={[]}>
                    <Column width={250} align="center" verticalAlign="middle">
                      <HeaderCell>Tên dự án</HeaderCell>
                      <Cell></Cell>
                    </Column>
                  </Table>
                </Panel>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    </div>
  );
}
