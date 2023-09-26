import { Layout } from "antd";
import SideBarContent from "./components/SideBarContent";
import ApplicationSteps from "./components/ApplicationSteps";
import FormContainer from "./components/common/FormContainer";
import UploadDragger from "./components/UploadDragger";

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
      <Layout.Content>
        <ApplicationSteps />
        <FormContainer
          title="Upload cover image"
          Children={<UploadDragger />}
        />
      </Layout.Content>
    </Layout>
  );
}

export default App;
