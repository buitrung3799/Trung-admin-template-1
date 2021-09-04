import Reaxt, { useState, useEffect } from "react";
import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import DefaultNavbar from "./DefaultNavbar";
import DefaultSidebar from "./DefaultSidebar";
import DefaultContent from "./DefaultContent";
import DefaultFooter from "./DefaultFooter";
export default function Home() {
  const [expand, setExpand] = useState(true);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <Container>
      <Header>
        <DefaultNavbar handleExpand={handleExpand} />
      </Header>
      <Container className="page-container">
        <Sidebar collapsible width={expand ? 250 : 56}>
          <DefaultSidebar expand={expand} />
        </Sidebar>
        <Container>
          <Content>
            <DefaultContent>
              <div style={{ height: 1000 }}></div>
            </DefaultContent>
          </Content>
          <Footer>
            <DefaultFooter />
          </Footer>
        </Container>
      </Container>
    </Container>
  );
}
