import { Button, Avatar } from "antd";
import { MenuOutlined, HomeOutlined } from "@ant-design/icons";
import checkList from "~/assets/icons/checkList.png";

const CheckListIcon = () => <img className="w-4" src={checkList}></img>;

export default function SideBarContent() {
  return (
    <div className="flex h-full flex-col items-center justify-between">
      <div className="flex flex-col items-center ">
        <Button type="text" icon={<MenuOutlined />} />
        <Button type="text" icon={<HomeOutlined />} />
        <Button type="text" icon={<CheckListIcon />}></Button>
      </div>
      <Avatar className="bg-[#1D4ED8]">NT</Avatar>
      <div />
    </div>
  );
}
