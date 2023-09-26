export default function ApplicationSteps() {
  const steps = ["Program Details", "Application Form", "Workflow", "Preview"];
  const selected = "Application Form";

  return (
    <div className="flex items-center justify-between font-semibold shadow-md">
      {steps.map((text) => (
        <>
          <div
            className={`relative flex flex-grow items-center justify-between py-5
             ${selected === text ? "selected bg-[#00635B]" : ""}`}
          >
            <p
              className={`flex-grow text-center
               ${selected === text ? "text-white" : ""}`}
            >
              {text}
            </p>
            <span
              className={`absolute right-[-10px] top-1/2 -translate-y-1/2 border-b-[20px] border-l-[20px] border-t-[20px] border-transparent 
              ${selected === text ? "border-l-[#00635B]" : ""} `}
            />
          </div>
          <div
            className={
              text === "Workflow" ? "border-1 h-12 border border-[#c4c4c4]" : ""
            }
          />
        </>
      ))}
    </div>
  );
}
