import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ data }: { data: Task[] }) {
  return (
    <div>
      {data.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
