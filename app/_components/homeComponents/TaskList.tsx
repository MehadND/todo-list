import React from 'react';
import { useDispatch } from 'react-redux';
import Task from './Task';
import { Button, Box, Typography } from '@mui/material';
import AddTaskModal from './AddTaskModal';

interface TaskListProps {
  taskList: TaskList;
}

const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box mb={4}>
      <Typography variant="h6">{taskList.name}</Typography>
      <Button variant="outlined" onClick={handleOpen}>
        Add Task
      </Button>
      <AddTaskModal
        open={open}
        onClose={handleClose}
        taskListId={taskList.id}
      />
      {taskList.tasks.map((task) => (
        <Task key={task.id} task={task} taskListId={taskList.id} />
      ))}
    </Box>
  );
};

export default TaskList;
