import { useContext } from "react";
import {
  CustomQuestionContext,
  customQuestionIntial,
} from "~/context/CustomQuestionContextProvider";

export function useCustomQuestionContext() {
  const context = useContext(CustomQuestionContext);
  if (!context) {
    throw new Error(
      "useCustomQuestion must be used within a CustomQuestionProvider",
    );
  }
  return context;
}

export default function useCustomQuestion() {
  const { customQuestion, setCustomQuestion } = useCustomQuestionContext();
  const updateType = (newType: string) => {
    setCustomQuestion({ ...customQuestion, type: newType });
  };

  const updateQuestion = (newQuestion: string) => {
    setCustomQuestion({ ...customQuestion, question: newQuestion });
  };

  const updateChoices = (newChoices: string[]) => {
    setCustomQuestion({ ...customQuestion, choices: newChoices });
  };

  const updateMaxChoice = (newMaxChoice: string) => {
    setCustomQuestion({ ...customQuestion, maxChoice: newMaxChoice });
  };

  const updateDisqualify = (newValue: boolean) => {
    setCustomQuestion({
      ...customQuestion,
      disqualify: newValue,
    });
  };

  const updateOther = (newValue: boolean) => {
    setCustomQuestion({ ...customQuestion, other: newValue });
  };

  const validateCustomQuestion = (): string | null => {
    if (customQuestion.question === "") {
      return "Question can't be empty";
    }
    return null;
  };

  const clearCustomQuestion = () => {
    setCustomQuestion(customQuestionIntial);
  };
  return {
    customQuestion,
    updateType,
    updateQuestion,
    updateChoices,
    updateMaxChoice,
    updateDisqualify,
    updateOther,
    validateCustomQuestion,
    clearCustomQuestion,
  };
}
