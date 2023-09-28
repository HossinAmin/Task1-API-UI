import Sidebar from "./components/Sidebar";
import ApplicationSteps from "./components/ApplicationSteps";
import UploadDragger from "./components/UploadDragger";
import useAppFormData from "./hooks/useAppFormData";
import { useEffect } from "react";
import PersonalInfoForm from "./components/forms/PersonalInfoForm";
import ProfileForm from "./components/forms/ProfileForm";
import AdditionalForm from "./components/forms/AdditionalForm";
import { CustomQuestionProvider } from "./context/CustomQuestionContextProvider";

function App() {
  const { fetchAppFormData } = useAppFormData();

  // inital fetch
  useEffect(() => {
    fetchAppFormData();
  }, [fetchAppFormData]);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex flex-grow flex-col gap-5 py-20">
        <ApplicationSteps />
        <div className="flex w-full flex-col gap-16 bg-white p-10">
          <UploadDragger />
          <CustomQuestionProvider>
            <PersonalInfoForm />
            <ProfileForm />
            <AdditionalForm />
          </CustomQuestionProvider>
        </div>
      </main>
    </div>
  );
}

export default App;
