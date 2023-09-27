import Sidebar from "./components/Sidebar";
import ApplicationSteps from "./components/ApplicationSteps";
import UploadDragger from "./components/UploadDragger";
import useAppFormData from "./hooks/useAppFormData";
import { useEffect } from "react";
import PersonalInfoForm from "./components/forms/personalInfoForm";
import ProfileForm from "./components/forms/ProfileForm";
import AdditionalForm from "./components/forms/AdditionalForm";

function App() {
  // const { fetchAppFormData, appFormData } = useAppFormData();

  // // inital fetch
  // useEffect(() => {
  //   fetchAppFormData();
  // }, [fetchAppFormData]);
  // console.log(appFormData);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex flex-grow flex-col gap-5 py-20">
        <ApplicationSteps />
        <div className="flex w-full flex-col gap-16 bg-white p-10">
          <UploadDragger />
          <PersonalInfoForm />
          <ProfileForm />
          <AdditionalForm />
        </div>
      </main>
    </div>
  );
}

export default App;
