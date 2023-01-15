const TaskList = ({tasks}) => {
  return (
    <div>
      <div>TaskList</div>
      <ul>
        {tasks.map((task)=>(
          <li>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
