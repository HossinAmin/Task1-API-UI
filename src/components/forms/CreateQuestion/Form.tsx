import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { QuestionTypes } from "~/constants/questions";
import Dropdown from "~/components/common/Dropdown";
import AdditionalFields from "./AdditionalFileds";
import useCustomQuestion from "~/hooks/useCustomQuestion";
import { FormType } from "~/types/FormType";
import useAppFormData from "~/hooks/useAppFormData";
interface CreateQuestionFormProps {
  open: boolean;
  close: () => void;
  formType: FormType;
  // Add other props here as needed
}

export default function CreateQuestionForm({
  open = false,
  close = () => {},
  formType,
}: CreateQuestionFormProps) {
  const [questionType, setQuestionType] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const {
    customQuestion,
    updateQuestion,
    updateType,
    clearCustomQuestion,
    validateCustomQuestion,
  } = useCustomQuestion();
  const { appendNewQuestion, sendAppFormData } = useAppFormData();

  const handleSubmit = () => {
    // validates new Question
    setErrorMessage(validateCustomQuestion());
    if (errorMessage == null) {
      // append in global state
      appendNewQuestion(formType, customQuestion);
      // send updated version to server
      sendAppFormData();
      // close form
      close();
      // clear custom Question
      clearCustomQuestion();
    }
  };

  if (open) {
    return (
      <div className="flex w-full flex-col gap-8 p-5 text-base">
        <span className="flex flex-col gap-1">
          <p>Type</p>
          <Dropdown
            onSelect={(selectedOption) => {
              setQuestionType(selectedOption);
              updateType(selectedOption);
            }}
            options={Object.values(QuestionTypes)}
            placeholder={Object.values(QuestionTypes)[0]}
          />
        </span>
        <span className="flex flex-col gap-1">
          <p>Question</p>
          <input
            className="common-input"
            type="text"
            placeholder="Type here"
            onBlur={(e) => updateQuestion(e.target.value)}
          />
        </span>
        <AdditionalFields questionType={questionType} />

        {errorMessage && <p className="text-error">{errorMessage}</p>}
        <div className="flex items-end justify-between py-5">
          <button
            onClick={close}
            className="flex gap-2 text-sm font-bold text-error hover:text-error/60 active:text-error/80 "
          >
            <Icon icon="mdi:close-thick" className="text-lg " />
            <p>Delete</p>
          </button>
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-green-700 px-2 py-1 text-white hover:bg-green-700/80 active:bg-green-700/90"
          >
            save
          </button>
        </div>
      </div>
    );
  }
}
