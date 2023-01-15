const TaskItem = ({ task }) => {
  return (
    <li className="{styles.task}">
      <div>
        <input
          type="checkbox"
          checked={task.checked}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className="{styles.label}">
          {task.name}
        </label>
        <button>
            Delete Task
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
