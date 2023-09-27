import React, { useState } from "react";

interface SwitchProps {
  label: string;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  label,
  onChange,
  checked = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleSwitch = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange?.(newCheckedState);
  };

  return (
    <div className="flex items-center ">
      <div
        className={`relative flex h-4 w-8 items-center rounded-full transition duration-300 ease-in-out ${
          isChecked ? "bg-blue-500" : "bg-gray-300"
        }`}
        onClick={toggleSwitch}
      >
        <div
          className={`absolute h-3 w-3 transform rounded-full bg-white shadow-md transition duration-300 ${
            isChecked ? "translate-x-4" : ""
          }`}
          style={{ margin: "2px" }} // Add a small margin to the circle
        />
      </div>
      <label className="ml-2">{label}</label>
    </div>
  );
};

export default Switch;
