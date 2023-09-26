import { ReactElement } from "react";

interface FormContainerProps {
  title: string;
  Children: ReactElement;
}

export default function FormContainer({ title, Children }: FormContainerProps) {
  return (
    <div className="flex w-[30rem] flex-col rounded-lg border bg-white pb-5 text-xl font-semibold shadow-lg">
      <div className="w-full bg-[#D0F7FA] px-4 py-2">
        <p>{title} </p>
      </div>
      <div className="px-4 py-2">{Children}</div>
    </div>
  );
}
