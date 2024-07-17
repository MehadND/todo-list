import React from 'react';
import { Button, Box, TextField } from '@mui/material';

import TaskList from './TaskList';

import { useAppDispatch, useAppSelector } from '@/lib/redux';
import { addTaskList } from '@/lib/redux/reducers/todoList.reducers';

import { toast } from 'react-toastify';

const TaskListCollection: React.FC = () => {
  const taskLists = useAppSelector(
    (state) => state.taskListCollection.taskLists,
  );
  const dispatch = useAppDispatch();
  const [newListName, setNewListName] = React.useState('');

  const handleAddTaskList = () => {
    if (newListName.trim() !== '') {
      dispatch(addTaskList(newListName));
      setNewListName('');
      toast.success('Task list added successfully');
    }
  };

  return (
    <Box>
      <Box display="flex" mb={2}>
        <TextField
          label="New Task List"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddTaskList}>
          Add
        </Button>
      </Box>
      <Box>
        {taskLists.map((taskList) => (
          <TaskList key={taskList.id} taskList={taskList} />
        ))}
      </Box>
    </Box>
  );
};

export default TaskListCollection;
