import Dropdown from "~/components/common/Dropdown";

export default function VideoQuestionFileds() {
  return (
    <div className="flex flex-col gap-5">
      <textarea className="common-input" placeholder="Type here" rows={8} />
      <div className="flex gap-2">
        <input
          className="common-input"
          type="number"
          placeholder="Max duration of video"
        />
        <Dropdown placeholder="in (sec/min)" options={["mins", "secs"]} />
      </div>
    </div>
  );
}
