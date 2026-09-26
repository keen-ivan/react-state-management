import { useReducer, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { taskReducer } from "../reducers/taskReducer";
import styles from "./TaskManager.module.css";

export function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState("");
  const { theme } = useTheme();

  const addTask = () => {
    if (!task.trim()) return;

    dispatch({
      type: "add",
      payload: task,
    });

    setTask("");
  };

  return (
    <main className={`${styles.container} ${styles[theme]}`}>
      <h2>Task Manager</h2>

      <div className={styles.inputArea}>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter a task"
        />

        <button onClick={addTask} disabled={!task.trim()}>
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>

            <button
              onClick={() =>
                dispatch({
                  type: "remove",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}