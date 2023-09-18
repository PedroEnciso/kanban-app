import HeadingS from "../UI/Typography/HeadingS";
import Task from "../Tasks/Task";

function Column({ column, columnList }) {
  return (
    <div>
      <h2>
        <HeadingS>
          {column.name} ({column.tasks.length})
        </HeadingS>
      </h2>
      <ul className="mt-6 flex flex-col gap-6">
        {column.tasks.map((task) => (
          <Task key={task.id} task={task} columnList={columnList} />
        ))}
      </ul>
    </div>
  );
}

export default Column;
