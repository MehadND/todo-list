import React from 'react';

import { Box, Checkbox, IconButton, Typography } from '@mui/material';
import { toast } from 'react-toastify';

import { useAppDispatch } from '@/lib/redux';
import {
  completeTask,
  hardDeleteTask,
  restoreTask,
  softDeleteTask,
} from '@/lib/redux/reducers/todoList.reducers';

import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';

interface TaskProps {
  task: Task;
  taskListId: string;
}

const Task: React.FC<TaskProps> = ({ task, taskListId }) => {
  const dispatch = useAppDispatch();

  const handleToggleComplete = () => {
    dispatch(completeTask({ taskListId, taskId: task.id }));
    toast.success('Task completed');
  };

  const handleSoftDelete = () => {
    dispatch(hardDeleteTask({ taskListId, taskId: task.id }));
    toast.success('Task deleted');
  };

  const handleRestore = () => {
    dispatch(restoreTask({ taskListId, taskId: task.id }));
    toast.success('Task restored');
  };

  return (
    <Box display="flex" alignItems="center" mb={1}>
      <Checkbox
        checked={task.completed}
        onChange={handleToggleComplete}
        disabled={task.isDeleted}
      />
      <Typography
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          opacity: task.isDeleted ? 0.5 : 1,
        }}
      >
        {task.title}
      </Typography>
      <IconButton onClick={task.isDeleted ? handleRestore : handleSoftDelete}>
        {task.isDeleted ? <RestoreIcon /> : <DeleteIcon />}
      </IconButton>
    </Box>
  );
};

export default Task;
