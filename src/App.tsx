import Sidebar from "./components/Sidebar";
import ApplicationSteps from "./components/ApplicationSteps";
import UploadDragger from "./components/UploadDragger";
import useAppFormData from "./hooks/useAppFormData";
import { useEffect } from "react";

function App() {
  const { fetchAppFormData, appFormData } = useAppFormData();

  // inital fetch
  useEffect(() => {
    fetchAppFormData();
  }, [fetchAppFormData]);
  console.log(appFormData);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex flex-grow flex-col gap-5 py-20">
        <ApplicationSteps />
        <div className="flex w-full flex-col bg-white p-10">
          <UploadDragger />
        </div>
      </main>
    </div>
  );
}

export default App;
