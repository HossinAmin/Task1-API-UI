// React and Hooks
import { useState } from "react";

// Icon Libraries
import { Icon } from "@iconify/react";

// Custom Hooks and Components
import FormContainer from "~/components/common/FormContainer";
import Switch from "~/components/common/Switch";
import CreateQuestionForm from "./CreateQuestion/Form";
import useAppFormData from "~/hooks/useAppFormData";
import AdditionalQuestionItem from "../common/AdditionalQuestionItem";

export default function ProfileForm() {
  const { appFormData } = useAppFormData();
  const [addQuestion, setAddQuestion] = useState(false);

  const profileInfo = appFormData?.data.attributes.profile;
  const additionalQuestions = profileInfo?.profileQuestions || [];

  return (
    <FormContainer title="Profile Information">
      <div className="flex flex-col items-start gap-5 px-3 py-5 text-lg">
        {Object.entries(profileInfo || {}).map(([key, value], index) => {
          return (
            <div
              key={index}
              className="flex w-full justify-between border-b-2 py-3"
            >
              <p>{key}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <input type="checkbox" value={value.internal} />
                <span>Mandatory</span>
                <Switch checked={value.show} />
              </div>
            </div>
          );
        })}

        {additionalQuestions.map((question, index) => (
          <AdditionalQuestionItem key={index} question={question} />
        ))}

        <button
          onClick={() => setAddQuestion(true)}
          className="flex items-center px-1 py-2 text-xs font-bold"
        >
          <Icon className="text-2xl" icon="ic:round-add" />
          <p>add question</p>
        </button>
      </div>

      <CreateQuestionForm
        formType="profile"
        open={addQuestion}
        close={() => setAddQuestion(false)}
      />
    </FormContainer>
  );
}
