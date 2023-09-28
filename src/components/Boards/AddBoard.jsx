import React from "react";
import { useForm } from "react-hook-form";

import HeadingL from "../UI/Typography/HeadingL";
import FormBlock from "../UI/Forms/FormBlock";
import AddSubtasks from "../Subtasks/AddSubtasks";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";

const emptyBoardArray = [{ title: "Todo" }, { title: "Doing" }];

function AddBoard(props) {
  const { register, handleSubmit } = useForm();

  return (
    <form className="flex flex-col gap-6">
      <h2>
        <HeadingL>Add New Board</HeadingL>
      </h2>
      <FormBlock
        name="name"
        label="Board Name"
        type="text"
        placeholder="e.g. Web Design"
        register={register}
      />
      <AddSubtasks
        type="BOARD"
        register={register}
        prevSubtasks={emptyBoardArray}
      />
      <ButtonPrimary type="submit" text="Create New Board" />
    </form>
  );
}

export default AddBoard;
