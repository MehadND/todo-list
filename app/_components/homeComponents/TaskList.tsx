import React, { useState } from 'react';

import { Button, Box, Typography } from '@mui/material';

import Task from './Task';
import AddTaskModal from './AddTaskModal';
import { GenericFlatList } from '../common/flatlist';

interface TaskListProps {
  taskList: TaskList;
}

const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box width={'100%'} mb={4}>
      <Typography variant="h6">{taskList.name}</Typography>
      <Button variant="outlined" onClick={handleOpen}>
        Add Task
      </Button>
      <AddTaskModal
        open={open}
        onClose={handleClose}
        taskListId={taskList.id}
      />

      <GenericFlatList
        items={taskList.tasks}
        renderItem={(task) => <Task key={task.id} task={task} />}
      />
    </Box>
  );
};

export default TaskList;
