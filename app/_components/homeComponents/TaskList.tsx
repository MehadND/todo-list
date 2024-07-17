import React from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';

import Task from './Task';

import { useAppDispatch } from '@/lib/redux';
import { addTask } from '@/lib/redux/reducers/todoList.reducers';

interface TaskListProps {
  taskList: TaskList;
}

const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
  const dispatch = useAppDispatch();
  const [newTaskTitle, setNewTaskTitle] = React.useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      dispatch(addTask({ taskListId: taskList.id, title: newTaskTitle }));
      setNewTaskTitle('');
      toast.success('Task added successfully');
    }
  };

  return (
    <Box mb={4}>
      <Typography variant="h6">{taskList.name}</Typography>
      <Box display="flex" mb={2}>
        <TextField
          label="New Task"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add
        </Button>
      </Box>
      {taskList.tasks.map((task) => (
        <Task key={task.id} task={task} taskListId={taskList.id} />
      ))}
    </Box>
  );
};

export default TaskList;
