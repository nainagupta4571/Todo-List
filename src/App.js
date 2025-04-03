import React, { useState } from "react";
import {
  Container,
  Heading,
  Input,
  Button,
  TaskList,
  TaskItem,
  DeleteButton,
  Select,
  Label,
  TaskContainer,
  CheckCircle,
} from "./Style"; 

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  const addTaskToList = () => {
    if (task.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    if (!priority) {
      alert("Please select a priority.");
      return;
    }
    
    const newTask = { text: task, priority: priority, done: false };
    setTaskList([...taskList, newTask]);
    setTask("");
    setPriority("");
  };

  const toggleTaskDone = (index) => {
    setTaskList(taskList.map((task, idx) =>
      idx === index ? { ...task, done: !task.done } : task
    ));
  };
  
  const removeTask = (index) => {
    const newTaskList = taskList.filter((_, idx) => idx !== index);
    setTaskList(newTaskList);
  };
  

  return (
    <Container>
      <Heading>To-Do List</Heading>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <Label>Select Priority of Task</Label>
      <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="" disabled>Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </Select>
      <Button onClick={addTaskToList}>+</Button>
      
      <TaskList>
        {taskList.map((task, index) => (
          <TaskContainer key={index}>
            <CheckCircle onClick={() => toggleTaskDone(index)} done={task.done}>
              {task.done && "✔"}
            </CheckCircle>
            <TaskItem priority={task.priority} done={task.done}>
              {task.text} - {task.priority}
            </TaskItem>
            <DeleteButton onClick={() => removeTask(index)}>❌</DeleteButton>
          </TaskContainer>
        ))}
      </TaskList>
    </Container>
  );
};

export default TodoList;