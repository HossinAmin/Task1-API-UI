import { useState, useEffect } from "react";
import FormContainer from "../common/FormContainer";
import Switch from "../common/Switch";
import { Icon } from "@iconify/react";

export default function ProfileForm() {
  const [profileInfo, setProfileInfo] = useState({});
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
        <button className="flex items-center px-1 py-2 text-xs font-bold">
          <Icon className="text-2xl" icon="ic:round-add" />
          <p>add question</p>
        </button>
      </div>
    </FormContainer>
  );
}
