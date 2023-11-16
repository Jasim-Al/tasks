import { useRef } from "react";
import {
  useAddTaskMutation,
  useUpdateTaskMutation,
} from "../../../../store/services/Tasks";

export default function AddTask({
  isEdit,
  task,
  closeEdit,
}: {
  isEdit?: boolean;
  task?: Task;
  closeEdit?: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [addTask, { isLoading }] = useAddTaskMutation();
  const [editTask, { isLoading: isUpdating }] = useUpdateTaskMutation();
  const onAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current?.value === "") return;
    if (isEdit) {
      if (task) {
        editTask({ ...task, task: inputRef.current?.value }).finally(() =>
          closeEdit!()
        );
      }
    } else {
      addTask({
        completed: false,
        task: inputRef.current?.value,
        createdAt: new Date(),
      });
      inputRef.current!.value = "";
    }
  };

  return (
    <form onSubmit={onAddTask}>
      <input ref={inputRef} aria-label="input for task" type="text" />
      <button disabled={isLoading}>
        {isLoading || isUpdating ? "Loading" : isEdit ? "update" : "add"}
      </button>
    </form>
  );
}
