import { useState } from "react";

import Input from "../UI/Forms/Input";
import BodyM from "../UI/Typography/BodyM";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";

const subArray = [
  { title: "", placeholder: "e.g. Make coffee" },
  { title: "", placeholder: "e.g. Drink coffee and smile" },
];

const emptySubtask = {
  title: "",
  placeholder: "New subtask",
};

function AddSubtasks({ prevSubtasks = null, register }) {
  const [subtasks, setSubtasks] = useState(prevSubtasks || subArray);

  const handleNewSubtask = (e) => {
    e.preventDefault();
    setSubtasks((prev) => [...prev, emptySubtask]);
  };

  const handleRemoveSubtask = (e, index) => {
    e.preventDefault();
    setSubtasks((prev) => {
      let update = [...prev];
      update.splice(index, 1);
      return update;
    });
  };

  return (
    <fieldset className="space-y-2">
      <legend>
        <BodyM>Subtasks</BodyM>
      </legend>
      {subtasks.map((sub, index) => (
        <div key={`s${index}`} className="flex gap-4">
          <Input
            register={register}
            name={`subtask${index}`}
            type="text"
            placeholder={sub.placeholder || "New placeholder"}
          />
          <button
            onClick={(e) => handleRemoveSubtask(e, index)}
            className="shrink-0"
          >
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#828FA3" fillRule="evenodd">
                <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
              </g>
            </svg>
          </button>
        </div>
      ))}
      <div className="pt-1">
        <ButtonPrimary
          text="+Add New Subtask"
          buttonType="secondary"
          onButtonClick={handleNewSubtask}
        />
      </div>
    </fieldset>
  );
}

export default AddSubtasks;
