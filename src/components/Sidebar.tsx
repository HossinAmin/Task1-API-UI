import { Icon } from "@iconify/react";

export default function Sidebar() {
  return (
    <aside className="flex w-[5rem] flex-col items-center justify-between bg-white py-5 shadow-lg">
      <div className="flex flex-col items-center gap-5 ">
        <button className="text-button">
          <Icon icon="ant-design:menu-outlined" />
        </button>
        <button className="text-button">
          <Icon icon="ant-design:home-outlined" />
        </button>
        <button className="text-button">
          <Icon icon="bi:list-check" />
        </button>
      </div>
      <div className="circle-shape">NT</div>
      <div />
    </aside>
  );
}
