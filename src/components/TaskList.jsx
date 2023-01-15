import TaskItem from './TaskItem'
const TaskList = ({tasks}) => {
  return (
    <div>
      <div>TaskList</div>
      <ul className="{styles.task}">
        {tasks.sort((a,b) => b.id -a.id).map((task)=>
          (<TaskItem
            key={task.id}
            task={task}
            />)
        )}
      </ul>
    </div>
  );
};

export default TaskList;
