import { CustomisedQuestion } from "~/types/AppFormData";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function AdditionalQuestionItem({
  question,
  editable = false,
}: {
  question: CustomisedQuestion;
  editable?: boolean;
}) {
  return (
    <div className="flex h-24 w-full flex-col justify-between border-b-2  ">
      <p className="text-xs text-gray-300">{question.type}</p>
      <div className="flex w-full items-center justify-between">
        <p>{question.question}</p>
        {editable && <Icon icon="ic:outline-edit" />}
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-400" />
    </div>
  );
}
