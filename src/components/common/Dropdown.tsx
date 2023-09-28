import { useState } from "react";
import { Icon } from "@iconify/react";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onSelect?: (selectedOption: string) => void; // Add onSelect prop
}

export default function Dropdown({
  options,
  placeholder = "Select an option",
  onSelect, // Add onSelect prop to the function parameters
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined,
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);

    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 focus:border-blue-500 focus:outline-none"
      >
        <span className="text-gray-00 text-base">
          {selectedOption || placeholder}
        </span>
        <Icon
          icon="heroicons:chevron-down"
          className={`h-6 w-6 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
              }}
              className={`block w-full px-4 py-2 text-left hover:bg-blue-100 ${
                selectedOption === option ? "bg-blue-200" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
