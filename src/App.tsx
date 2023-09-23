import { Layout } from "antd";
import SideBarContent from "./components/SideBarContent";
function App() {
  return (
    <Layout hasSider>
      <Layout.Sider
        width="50px"
        style={{
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <SideBarContent />
      </Layout.Sider>
    </Layout>
  );
}

export default App;
