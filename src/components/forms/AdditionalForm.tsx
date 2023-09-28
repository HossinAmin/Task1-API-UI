// React and Hooks
import { useState } from "react";

// Icon Libraries
import { Icon } from "@iconify/react";

// Custom Hooks and Components
import FormContainer from "~/components/common/FormContainer";
import CreateQuestionForm from "./CreateQuestion/Form";
import useAppFormData from "~/hooks/useAppFormData";
import AdditionalQuestionItem from "../common/AdditionalQuestionItem";

export default function AdditionalForm() {
  const { appFormData } = useAppFormData();
  const [addQuestion, setAddQuestion] = useState(false);

  const additionalQuestions =
    appFormData?.data.attributes.customisedQuestions || [];

  return (
    <FormContainer title="Additional Questions">
      <div className="flex flex-col items-start gap-5 px-3 py-5 text-lg">
        {additionalQuestions.map((question, index) => (
          <AdditionalQuestionItem key={index} question={question} editable />
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
        formType="additional"
        open={addQuestion}
        close={() => setAddQuestion(false)}
      />
    </FormContainer>
  );
}
