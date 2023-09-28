import React, { createContext, useState, ReactNode } from "react";
import { CustomisedQuestion } from "~/types/AppFormData";

interface CustomQuestionContextType {
  customQuestion: CustomisedQuestion;
  setCustomQuestion: React.Dispatch<React.SetStateAction<CustomisedQuestion>>;
}

export const CustomQuestionContext = createContext<
  CustomQuestionContextType | undefined
>(undefined);

interface CustomQuestionProviderProps {
  children: ReactNode;
}

export function CustomQuestionProvider({
  children,
}: CustomQuestionProviderProps) {
  const [customQuestion, setCustomQuestion] = useState<CustomisedQuestion>({
    type: "",
    question: "",
    id: "",
    choices: [],
    maxChoice: "",
    disqualify: false,
    other: false,
  });

  return (
    <CustomQuestionContext.Provider
      value={{ customQuestion, setCustomQuestion }}
    >
      {children}
    </CustomQuestionContext.Provider>
  );
}
