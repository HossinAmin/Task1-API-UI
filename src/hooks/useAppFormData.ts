import { AppFormDataContext } from "../context/AppFormDataContextProvider";
import { useCallback, useContext } from "react";
import { CustomisedQuestion } from "~/types/AppFormData";
import { FormType } from "~/types/FormType";

// replace with your api url
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
    try {
      const res = await fetch(api_url);
      const data = await res.json();
      setAppFormData(data);
    } catch (err: any) {
      console.error(err.message);
    }
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
              customisedQuestions: [
                ...prev!.data.attributes.customisedQuestions,
                newQuestion,
              ],
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

  const sendAppFormData = useCallback(async () => {
    try {
      const res = await fetch(api_url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appFormData),
      });
      if (res.ok) {
        // Request was successful
        console.log("Data sent successfully");
      } else {
        // Handle error cases here
        console.error("Failed to send data to the server");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  }, []);
  return { appFormData, fetchAppFormData, appendNewQuestion, sendAppFormData };
}
