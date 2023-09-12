import EmptyBoardMessage from "./EmptyBoardMessage";
import Column from "./Column";

function DisplayedBoard({ board }) {
  if (board.columns.length === 0) return <EmptyBoardMessage />;

  const columnList = board.columns.map((column) => column.name);

  return (
    <div className="flex gap-6 px-4 overflow-x-scroll">
      {board.columns.map((column) => (
        <Column key={column.name} column={column} columnList={columnList} />
      ))}
    </div>
  );
}

export default DisplayedBoard;
