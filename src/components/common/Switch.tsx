import React, { useState } from "react";

interface SwitchProps {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
}

const Switch: React.FC<SwitchProps> = ({ onChange, checked = false }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleSwitch = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange?.(newCheckedState);
  };

  return (
    <div className="flex items-center ">
      <div
        className={`relative flex h-4 w-8 items-center justify-end rounded-full transition duration-300 ease-in-out ${
          isChecked ? "bg-[#087B2F]" : "bg-gray-300"
        }`}
        onClick={toggleSwitch}
      >
        <div
          className={`absolute h-3 w-3 transform rounded-full bg-white shadow-md transition duration-300 ${
            isChecked ? "-translate-x-4" : ""
          }`}
          style={{ margin: "2px" }}
        />
      </div>
      <label className="ml-2 w-8">{isChecked ? "Show" : "Hide"}</label>
    </div>
  );
};

export default Switch;
