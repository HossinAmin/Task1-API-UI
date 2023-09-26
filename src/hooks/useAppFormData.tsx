import { AppFormDataContext } from "../context/AppFormDataContextProvider";
import { useCallback, useContext } from "react";

const api_url =
  "https://6672e035-212f-45db-b0f6-fb6c5262e5c9.mock.pstmn.io/api/1/programs/1/application-form";

export default function useAppFormData() {
  const { setAppFormData, appFormData } = useContext(AppFormDataContext);

  const fetchAppFormData = useCallback(async () => {
    try {
      const res = await fetch(api_url);
      const data = await res.json();
      console.log("in hook", data);
      setAppFormData?.(data);
    } catch (err: any) {
      console.error(err.message);
    }
  }, []);
  return { appFormData, fetchAppFormData };
}
