import { useState, useEffect } from "react";
import FormContainer from "../common/FormContainer";
import Switch from "../common/Switch";
import { Icon } from "@iconify/react";

export default function PersonalInfoForm() {
  const [personalInfo, setPersonalInfo] = useState({});
  useEffect(() => {
    setPersonalInfo({
      firstName: {
        internalUse: false,
        show: true,
      },
      lastName: {
        internalUse: false,
        show: true,
      },
      emailId: {
        internalUse: false,
        show: true,
      },
      phoneNumber: {
        internalUse: false,
        show: true,
      },
      nationality: {
        internalUse: false,
        show: true,
      },
      currentResidence: {
        internalUse: false,
        show: true,
      },
      idNumber: {
        internalUse: false,
        show: true,
      },
      dateOfBirth: {
        internalUse: false,
        show: true,
      },
      gender: {
        internalUse: false,
        show: true,
      },
      personalQuestions: [
        {
          type: "YesNo",
          question: "<string>",
          id: "<uuid>",
          choices: ["<string>", "<string>"],
          maxChoice: "<integer>",
          disqualify: false,
          other: false,
        },
        {
          type: "Dropdown",
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
        {Object.entries(personalInfo).map(([key, value]) => {
          return (
            <div
              key={key}
              className="flex w-full justify-between border-b-2 py-3 "
            >
              <p>{key}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <input type="checkbox" value={value.internal} />
                <span>Internal</span>
                <Switch label="Hide" checked={value.show} />
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
