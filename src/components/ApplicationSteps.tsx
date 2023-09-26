export default function ApplicationSteps() {
  const steps = ["Program Details", "Application Form", "Workflow", "Preview"];
  const selected = "Application Form";

  return (
    <div className="flex justify-between font-semibold shadow-md">
      {steps.map((text) => (
        <div
          key={text}
          className={`relative flex flex-grow items-center justify-between py-5
             ${selected === text ? "selected bg-[#00635B]" : ""}`}
        >
          <p
            className={`flex-grow text-center
               ${selected === text ? "text-white" : ""}`}
          >
            {text}
          </p>
          {selected === text && (
            <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 border-b-[20px] border-l-[20px] border-t-[20px] border-transparent border-l-[#00635B]" />
          )}
          <div
            className={
              text === "Workflow" ? "border-1 h-12 border border-[#c4c4c4]" : ""
            }
          />
        </div>
      ))}
    </div>
  );
}
