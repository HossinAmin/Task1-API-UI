import { useState } from "react";
import { Icon } from "@iconify/react";
import useAppFormData from "~/hooks/useAppFormData";
import FormContainer from "~/components/common/FormContainer";
import Switch from "~/components/common/Switch";
import CreateQuestionForm from "./CreateQuestion/Form";

export default function PersonalInfoForm() {
  const { appFormData } = useAppFormData();
  const [addQuestion, setAddQuestion] = useState(false);

  const personalInfo = appFormData?.data.attributes.personalInformation;

  return (
    <FormContainer title="Personal Information">
      <div className="flex flex-col items-start  gap-5 px-3 py-5 text-lg">
        {personalInfo &&
          Object.entries(personalInfo).map(([key, value]) => {
            return (
              <div
                key={key}
                className="flex w-full justify-between border-b-2 py-3 "
              >
                <p>{key}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <input type="checkbox" value={value.internal} />
                  <span>Internal</span>
                  <Switch checked={value.show} />
                </div>
              </div>
            );
          })}
        <button
          onClick={() => setAddQuestion(true)}
          className="flex items-center px-1 py-2 text-xs font-bold"
        >
          <Icon className="text-2xl" icon="ic:round-add" />
          <p>add question</p>
        </button>
      </div>

      <CreateQuestionForm
        open={addQuestion}
        close={() => setAddQuestion(false)}
      />
    </FormContainer>
  );
}
