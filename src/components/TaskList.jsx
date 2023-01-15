import TaskItem from './TaskItem'
const TaskList = ({tasks, deleteTask}) => {
  return (
    <div>
      <div>TaskList</div>
      <ul className="{styles.task}">
        {tasks.sort((a,b) => b.id -a.id).map((task)=>
          (<TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            />)
        )}
      </ul>
    </div>
  );
};

export default TaskList;
