import React from "react";

import HeadingS from "./Typography/HeadingS";
import Task from "./Task";

function Column({ column }) {
  return (
    <div>
      <h2>
        <HeadingS>
          {column.name} ({column.tasks.length})
        </HeadingS>
      </h2>
      <ul className="mt-6 space-y-5">
        {column.tasks.map((task) => (
          <Task key={task.title} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default Column;
