import React, { useState, useEffect } from "react";
import { Panel, PageNameNav, Button } from "../../components/UI Components";
import { Icon, ButtonToolbar } from "rsuite";
import MainTable from "./MainTable";
export default function Home() {
  const [data, setData] = useState([{ alo: 1 }, { alo: 2 }]);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <PageNameNav title="Quản lý user">
        <ButtonToolbar>
          <Button mainColor="blue">
            <Icon icon="plus" />
            &nbsp; Thêm mới user
          </Button>
        </ButtonToolbar>
      </PageNameNav>
      <div className="main-content">
        <Panel shaded bordered bodyFill>
          <MainTable data={data} loading={loading} />
        </Panel>
      </div>
    </div>
  );
}
