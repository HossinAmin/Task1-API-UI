import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import useCustomQuestion from "~/hooks/useCustomQuestion";

interface Field {
  id: number;
  value: string;
}

function DropdownFields() {
  const { updateChoices, updateOther } = useCustomQuestion();

  const [fields, setFields] = useState<Field[]>([{ id: 1, value: "" }]);
  const [allowOthers, setAllowOthers] = useState(false);

  function addField() {
    const newField = { id: fields.length + 1, value: "" };
    setFields([...fields, newField]);
  }

  function handleInputChange(id: number, value: string) {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value } : field,
    );
    setFields(updatedFields);
    updateChoices(updatedFields.map((field) => field.value));
  }

  return (
    <div className="flex flex-col gap-2 px-5">
      <p>Choice</p>
      {fields.map((field) => (
        <div key={field.id} className="flex items-center justify-between gap-2">
          <Icon className="text-xl" icon="ic:round-list" />
          <input
            className="common-input"
            type="text"
            placeholder="Type here"
            onBlur={(e) => handleInputChange(field.id, e.target.value)}
          />
          {field.id === fields.length && (
            <Icon
              className="text-xl"
              icon="mdi:plus-thick"
              onClick={addField}
            />
          )}
        </div>
      ))}
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => updateOther(e.target.checked)}
          type="checkbox"
        />
        <p>Enable “Other” option</p>
      </div>
    </div>
  );
}

export default DropdownFields;
