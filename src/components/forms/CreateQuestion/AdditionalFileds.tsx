import { Icon } from "@iconify/react/dist/iconify.js";
import Dropdown from "~/components/common/Dropdown";
import { QuestionTypes } from "~/constants/questions";

export default function AdditionalFields({
  questionType,
}: {
  questionType: string;
}) {
  if (questionType === QuestionTypes.YesNo) {
    return (
      <div className="flex items-center justify-start gap-2 text-sm font-semibold">
        <input type="checkbox" />
        <p>Disqualify candidate if the answer is no</p>
      </div>
    );
  } else if (questionType === QuestionTypes.Dropdown) {
    return (
      <div className="flex flex-col gap-2 px-5">
        <p>Choice</p>
        <div className="flex items-center justify-between gap-2 ">
          <Icon className="text-xl" icon="ic:round-list" />
          <input className="common-input" type="text" placeholder="Type here" />
          <Icon className="text-xl" icon="mdi:plus-thick" />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p>Enable “Other” option</p>
        </div>
      </div>
    );
  } else if (questionType === QuestionTypes.MultipleChoice) {
    return (
      <div className="flex flex-col gap-2 px-5">
        <p>Choice</p>
        <div className="flex items-center justify-between gap-2 ">
          <Icon className="text-xl" icon="ic:round-list" />
          <input
            required
            className="common-input"
            type="text"
            placeholder="Type here"
          />
          <Icon className="text-xl" icon="mdi:plus-thick" />
        </div>
        <p>Max choice allowed</p>
        <input
          required
          className="common-input"
          type="number"
          placeholder="Enter number of choice allowed here"
        />
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p>Enable “Other” option</p>
        </div>
      </div>
    );
  } else if (questionType === QuestionTypes.VideoQuestion) {
    return (
      <div className="flex flex-col gap-5">
        <textarea className="common-input" placeholder="Type here" rows={8} />
        <div className="flex gap-2">
          <input
            className="common-input"
            type="number"
            placeholder="Max duration of video"
          />
          <Dropdown placeholder="in (sec/min)" options={["mins", "secs"]} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
