import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { QuestionTypes } from "~/constants/questions";
import Dropdown from "~/components/common/Dropdown";
import AdditionalFields from "./AdditionalFileds";

export default function CreateQuestionForm({ open = false, close = () => {} }) {
  const [questionType, setQuestionType] = useState("");

  if (open) {
    return (
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-full flex-col gap-8 p-5 text-base"
      >
        <span className="flex flex-col gap-1">
          <p>Type</p>
          <Dropdown
            onSelect={(selectedOption) => setQuestionType(selectedOption)}
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
            minLength={20}
            required
          />
        </span>
        <AdditionalFields questionType={questionType} />

        <div className="flex items-end justify-between py-5">
          <button
            onClick={close}
            className="flex gap-2 text-sm font-bold text-error hover:text-error/60 active:text-error/80 "
          >
            <Icon icon="mdi:close-thick" className="text-lg " />
            <p>Delete</p>
          </button>
          <button className="rounded-lg bg-green-700 px-2 py-1 text-white hover:bg-green-700/80 active:bg-green-700/90">
            save
          </button>
        </div>
      </form>
    );
  }
}
