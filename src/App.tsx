import { Layout } from "antd";
import SideBarContent from "./components/SideBarContent";
import ApplicationSteps from "./components/ApplicationSteps";
import FormContainer from "./components/common/FormContainer";

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
        <div className="flex w-full flex-col bg-white p-10">
          <FormContainer title="Upload cover image" Children={<></>} />
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default App;
