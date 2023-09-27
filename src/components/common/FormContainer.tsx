import { ReactNode } from "react";

interface FormContainerProps {
  children: ReactNode;
  title: string;
}

export default function FormContainer({ children, title }: FormContainerProps) {
  return (
    <div className="flex w-[30rem] flex-col rounded-lg border bg-white text-xl font-semibold shadow-lg">
      <div className="w-full bg-[#D0F7FA] px-4 py-2">
        <p>{title} </p>
      </div>
      {children}
    </div>
  );
}
