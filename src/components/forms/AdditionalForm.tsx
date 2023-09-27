import { useState } from "react";
import { Icon } from "@iconify/react";
import FormContainer from "~/components/common/FormContainer";
import CreateQuestionForm from "./CreateQuestion/Form";
import useAppFormData from "~/hooks/useAppFormData";

export default function AdditionalForm() {
  const { appFormData } = useAppFormData();
  const [addQuestion, setAddQuestion] = useState(false);

  const additionalQuestion = appFormData?.data.attributes.customisedQuestions;

  return (
    <FormContainer title="Additional Questions">
      <div className="flex  flex-col items-start  gap-5 px-3 py-5 text-lg">
        {additionalQuestion?.map((question) => {
          return (
            <div
              key={question.id}
              className="flex h-24 w-full flex-col justify-between border-b-2 py-3 "
            >
              <p className="text-xs text-gray-300">{question.type}</p>
              <div className="flex w-full items-center justify-between">
                <p>{question.question}</p>
                <Icon icon="ic:outline-edit" />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400" />
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
