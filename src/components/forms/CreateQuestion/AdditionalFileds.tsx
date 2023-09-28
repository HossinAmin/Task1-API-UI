import { QuestionTypes } from "~/constants/questions";
import MCQFilds from "./MCQFields";
import DropdownFields from "./DropdownFields";
import VideoQuestionFileds from "./VideoQuestionFileds";
import useCustomQuestion from "~/hooks/useCustomQuestion";

interface AdditionalFieldsProps {
  questionType: string;
}

export default function AdditionalFields({
  questionType,
}: AdditionalFieldsProps) {
  const { updateDisqualify } = useCustomQuestion();

  if (questionType === QuestionTypes.YesNo) {
    return (
      <div className="flex items-center justify-start gap-2 text-sm font-semibold">
        <input
          type="checkbox"
          onChange={(e) => updateDisqualify(e.target.checked)}
        />
        <p>Disqualify candidate if the answer is no</p>
      </div>
    );
  } else if (questionType === QuestionTypes.Dropdown) {
    return <DropdownFields />;
  } else if (questionType === QuestionTypes.MultipleChoice) {
    return <MCQFilds />;
  } else if (questionType === QuestionTypes.VideoQuestion) {
    return <VideoQuestionFileds />;
  } else {
    return <></>;
  }
}
