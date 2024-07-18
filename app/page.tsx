'use client';
import { useState } from 'react';

import { Box, Container, Typography } from '@mui/material';

import {
  Task,
  TaskListTabs,
  TaskListModal,
  AddTaskModal,
} from './_components/homeComponents';
import { GenericButton } from './_components/common/buttons';

import { useAppSelector } from '@/lib/redux';
import { selectTasksOfSelectedList } from '@/lib/redux/reducers/todoList.reducers';

export default function Home() {
  const tasks = useAppSelector((state) => selectTasksOfSelectedList(state));
  const { taskLists, selectedListId } = useAppSelector(
    (state) => state.taskListCollection,
  );

  const [addListModal, setAddListModal] = useState(false);
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleOpen = () => setAddListModal(true);
  const handleClose = () => setAddListModal(false);
  const handleAddTaskModalClose = () => setAddTaskModal(false);

  const handleListChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" mt={10}>
        To-Do List Application
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 'calc(100vh - 200px)',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '652px',
            boxShadow: '0px 0px 29px #00000026',
            height: '524px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TaskListTabs
            taskLists={taskLists}
            tabValue={tabValue}
            handleListChange={handleListChange}
            handleOpen={handleOpen}
          />
          <Box
            sx={{
              padding: '20px 30px',
              flexBasis: '100%',
              overflowY: 'auto',
            }}
          >
            <Box width="100%">
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </Box>
          </Box>

          <Box display="flex" justifyContent="center" mb="20px">
            <GenericButton
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{
                width: '166px',
                height: '49px',
                textTransform: 'capitalize',
              }}
              onClick={() => setAddTaskModal(true)}
            >
              Add a to do
            </GenericButton>
          </Box>

          <TaskListModal open={addListModal} handleClose={handleClose} />
          <AddTaskModal
            open={addTaskModal}
            onClose={handleAddTaskModalClose}
            taskListId={selectedListId}
          />
        </Box>
      </Box>
    </Container>
  );
}
