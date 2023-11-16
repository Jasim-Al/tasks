import { useState } from "react";
import styles from "./taskItem.module.css";
import { useDeleteTaskMutation } from "../../../../store/services/Tasks";
import AddTask from "../AddTask/AddTask";

export default function TaskItem({ task }: { task: Task }) {
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();
  const [isEdit, setIsEdit] = useState(false);

  const onDelete = (id: string) => {
    deleteTask(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <p>{task.task}</p>
        <div className={styles.actions}>
          <button onClick={() => onDelete(task.id)} disabled={isLoading}>
            {isLoading ? "deleting" : "x"}
          </button>
          <button onClick={() => setIsEdit((prev) => !prev)}>edit</button>
        </div>
      </div>
      {isEdit && (
        <div>
          <AddTask isEdit task={task} closeEdit={() => setIsEdit(false)} />
        </div>
      )}
    </div>
  );
}
