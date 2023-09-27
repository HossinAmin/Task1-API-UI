import { createContext, ReactNode, useState } from "react";
import { ApplicationFormDataResponse } from "../types/AppFormData";

export const AppFormDataContext = createContext<{
  appFormData: ApplicationFormDataResponse | null;
  setAppFormData: React.Dispatch<
    React.SetStateAction<ApplicationFormDataResponse | null>
  >;
} | null>(null);

export default function AppFormDataContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [appFormData, setAppFormData] =
    useState<ApplicationFormDataResponse | null>(null);

  return (
    <AppFormDataContext.Provider value={{ appFormData, setAppFormData }}>
      {children}
    </AppFormDataContext.Provider>
  );
}
