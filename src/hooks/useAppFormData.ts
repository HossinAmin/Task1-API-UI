import { AppFormDataContext } from "../context/AppFormDataContextProvider";
import { useCallback, useContext } from "react";
import data from "~/data.json";
import {
  ApplicationFormDataResponse,
  CustomisedQuestion,
} from "~/types/AppFormData";
import { FormType } from "~/types/FormType";

const api_url =
  "https://6672e035-212f-45db-b0f6-fb6c5262e5c9.mock.pstmn.io/api/1/programs/1/application-form";

function useAppFormContext() {
  const context = useContext(AppFormDataContext);

  if (!context) {
    throw new Error("AppFormContext is used outside its provider");
  }

  return context;
}

export default function useAppFormData() {
  const { appFormData, setAppFormData } = useAppFormContext();

  const fetchAppFormData = useCallback(async () => {
    // remove appi set global state with fixed value
    // try {
    //   const res = await fetch(api_url);
    //   const data = await res.json();
    //   setAppFormData(data);
    // } catch (err: any) {
    //   console.error(err.message);
    // }

    setAppFormData(data as ApplicationFormDataResponse);
  }, []);

  const appendNewQuestion = (
    formType: FormType,
    newQuestion: CustomisedQuestion,
  ) => {
    if (formType === "personalInfo") {
      setAppFormData((prev) => {
        const updatedFormData = {
          ...prev!,
          data: {
            ...prev!.data,
            attributes: {
              ...prev!.data.attributes,
              personalInformation: {
                ...prev!.data.attributes.personalInformation,
                personalQuestions: [
                  ...prev!.data.attributes.personalInformation
                    .personalQuestions,
                  newQuestion,
                ],
              },
            },
          },
        };
        return updatedFormData;
      });
    } else if (formType === "additional") {
      setAppFormData((prev) => {
        const updatedFormData = {
          ...prev!,
          data: {
            ...prev!.data,
            attributes: {
              ...prev!.data.attributes,
              personalInformation: {
                ...prev!.data.attributes.personalInformation,
                customisedQuestions: [
                  ...prev!.data.attributes.customisedQuestions,
                  newQuestion,
                ],
              },
            },
          },
        };
        return updatedFormData;
      });
    } else {
      setAppFormData((prev) => {
        const updatedFormData = {
          ...prev!,
          data: {
            ...prev!.data,
            attributes: {
              ...prev!.data.attributes,
              profile: {
                ...prev!.data.attributes.profile,
                profileQuestions: [
                  ...prev!.data.attributes.profile.profileQuestions,
                  newQuestion,
                ],
              },
            },
          },
        };
        return updatedFormData;
      });
    }
  };

  return { appFormData, fetchAppFormData, appendNewQuestion };
}
