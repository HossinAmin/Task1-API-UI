import { createContext, ReactNode, useState } from "react";
import { ApplicationFormDataResponse } from "../types/AppFormData";

export const AppFormDataContext = createContext<{
  appFormData?: ApplicationFormDataResponse;
  setAppFormData?: React.Dispatch<
    React.SetStateAction<ApplicationFormDataResponse | undefined>
  >;
}>({});

export default function AppFormDataContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [appFormData, setAppFormData] = useState<ApplicationFormDataResponse>();

  return (
    <AppFormDataContext.Provider value={{ appFormData, setAppFormData }}>
      {children}
    </AppFormDataContext.Provider>
  );
}
