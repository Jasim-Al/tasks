import { useGetTasksQuery } from "../../store/services/Tasks";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

function Tasks() {
  const { data, error, isLoading } = useGetTasksQuery();

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }

  if (data?.length && data.length > 0) {
    return (
      <div>
        <h2>Tasks</h2>
        <TaskList data={data} />
        <AddTask />
      </div>
    );
  }
}

export default Tasks;
