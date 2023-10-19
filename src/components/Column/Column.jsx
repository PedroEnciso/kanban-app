import HeadingS from "../UI/Typography/HeadingS";
import Task from "../Tasks/Task";

function Column({ column, columnList }) {
  let circleColor = "";
  if (column.color === "lightblue") {
    circleColor = "bg-lightblue";
  }
  if (column.color === "orange") {
    circleColor = "bg-orange";
  }
  if (column.color === "lightred") {
    circleColor = "bg-lightred";
  }
  if (column.color === "pink") {
    circleColor = "bg-pink";
  }
  if (column.color === "green") {
    circleColor = "bg-green";
  }

  return (
    <div className="min-w-[280px]">
      <div className="flex gap-3 items-center">
        <div className={`${circleColor} h-4 w-4 rounded-full`}></div>
        <h2>
          <HeadingS>
            {column.name} ({column.tasks.length})
          </HeadingS>
        </h2>
      </div>
      <ul className="mt-6 flex flex-col gap-6">
        {column.tasks.map((task) => (
          <Task key={task.id} task={task} columnList={columnList} />
        ))}
      </ul>
    </div>
  );
}

export default Column;
