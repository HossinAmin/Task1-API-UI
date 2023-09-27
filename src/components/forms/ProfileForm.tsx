import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import FormContainer from "~/components/common/FormContainer";
import Switch from "~/components/common/Switch";
import CreateQuestionForm from "./CreateQuestion/Form";

export default function ProfileForm() {
  const [profileInfo, setProfileInfo] = useState({});
  const [addQuestion, setAddQuestion] = useState(false);

  useEffect(() => {
    setProfileInfo({
      education: {
        mandatory: true,
        show: true,
      },
      experience: {
        mandatory: true,
        show: true,
      },
      resume: {
        mandatory: true,
        show: true,
      },
      profileQuestions: [
        {
          type: "FileUpload",
          question: "<string>",
          id: "<uuid>",
          choices: ["<string>", "<string>"],
          maxChoice: "<integer>",
          disqualify: false,
          other: false,
        },
        {
          type: "Date",
          question: "<string>",
          id: "<uuid>",
          choices: ["<string>", "<string>"],
          maxChoice: "<integer>",
          disqualify: false,
          other: false,
        },
      ],
    });
  }, []);
  return (
    <FormContainer title="Personal Information">
      <div className="flex flex-col items-start  gap-5 px-3 py-5 text-lg">
        {Object.entries(profileInfo).map(([key, value]) => {
          return (
            <div
              key={key}
              className="flex w-full justify-between border-b-2 py-3 "
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
