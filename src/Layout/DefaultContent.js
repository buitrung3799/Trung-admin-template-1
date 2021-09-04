import React from "react";
import { Navbar, Grid, Row, Col } from "rsuite";
import { StatisticalCard , Panel } from "../components/UI Components";
import { Line, Doughnut } from "react-chartjs-2";
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
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
        borderAlign: "inner",
      },
    ],
  };
  return (
    <div>
      <div className="page-name-nav">
        <Navbar appearance="default">
          <Navbar.Header>
            <div className="page-name-container">
              <h6>TRANG CHỦ</h6>
            </div>
          </Navbar.Header>
        </Navbar>
      </div>
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
              <Col lg={14}>
                <Panel header="Thu nhập tháng trước" shaded>
                  <Line data={data} options={options} />
                </Panel>
              </Col>
              <Col lg={10}>
                <Panel header="Biểu đồ tồn kho" shaded>
                  <Doughnut data={data2} />
                </Panel>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    </div>
  );
}
