import React, { useState } from 'react';
import { Button, Box, TextField, Typography, Tabs, Tab } from '@mui/material';

import TaskList from './TaskList';

import { useAppDispatch, useAppSelector } from '@/lib/redux';
import {
  addTaskList,
  selectTasksOfSelectedList,
  updateSelectedTaskList,
} from '@/lib/redux/reducers/todoList.reducers';

import { toast } from 'react-toastify';
import GenericButton from '../common/buttons/GenericButton';
import GenericModal from '../common/modals/GenericModal';
import Image from 'next/image';
import icons from '@/app/_assets/svgs';
import Task from './Task';
import AddTaskModal from '../common/modals/AddTaskModal';
import GenericInput from '../common/inputs/GenericInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import cancel_icon from '@/app/_assets/svgs/cancelIcon.svg';
import { useSelector } from 'react-redux';

interface FormValues {
  name: string;
}

const TaskListCollection: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    clearErrors,
    reset,
  } = useForm<FormValues>();
  const [open, setOpen] = useState(false);
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const handleAddTaskModalClose = () => {
    setAddTaskModal(false);
    reset();
  };

  const { taskLists, selectedListId } = useAppSelector(
    (state) => state.taskListCollection,
  );
  const dispatch = useAppDispatch();

  const handleAddTaskList: SubmitHandler<FormValues> = ({ name }) => {
    if (name.trim() !== '') {
      dispatch(addTaskList(name));
      toast.success('Task list added successfully');
      handleClose();
    }
  };

  const tasks = useAppSelector((state) => selectTasksOfSelectedList(state));

  return (
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
      <Box
        sx={{
          bgcolor: '#926CB9',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopRightRadius: '12px',
          borderTopLeftRadius: '12px',
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          sx={{
            color: 'white',
            '& .Mui-selected': {
              color: 'white !important',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#F0B167',
              height: '5px',
            },
            pr: '20px',
          }}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          {taskLists.map((tab, index) => (
            <Tab
              key={index}
              label={tab.name}
              sx={{
                color: 'white',
                fontSize: '18px',
                fontWeight: '500',
                borderRight: '1px solid white',
                padding: '22px 30px',
                textTransform: 'capitalize',
              }}
              onClick={() =>
                dispatch(updateSelectedTaskList({ taskListId: tab.id }))
              }
            />
          ))}
        </Tabs>
        <Box
          sx={{ cursor: 'pointer', mr: '15px', mt: '5px' }}
          onClick={handleOpen}
        >
          <Image src={icons.addIcon} alt="Cancel" />
        </Box>
      </Box>

      <Box
        sx={{
          padding: '20px 30px',
          flexBasis: '100%',
          overflowY: 'auto',
        }}
      >
        <Box width="100%">
          {tasks.map((task) => (
            <Task key={task.id} task={task} taskListId={task.id} />
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

      <GenericModal open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(handleAddTaskList)}>
          <Box mb={1.5} width="100%">
            <Box
              sx={{
                bgcolor: '#926CB9',
                color: 'white',
                py: '15px',
                px: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTopRightRadius: '12px',
                borderTopLeftRadius: '12px',
              }}
            >
              <Typography variant="h6" fontSize={24} fontWeight={500}>
                Add a to do list
              </Typography>
              <Box onClick={handleClose} sx={{ cursor: 'pointer' }}>
                <Image src={cancel_icon} alt="Cancel" />
              </Box>
            </Box>
            <Box py="25px" px="20px">
              <GenericInput
                name="name"
                control={control}
                label="Task Title"
                placeholder="Enter title for the task"
                fullWidth
                rules={{ required: 'Task title is required' }}
              />
              <Box display="flex" justifyContent="center">
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
                >
                  Add List
                </GenericButton>
              </Box>
            </Box>
          </Box>
        </form>
      </GenericModal>

      <AddTaskModal
        open={addTaskModal}
        onClose={handleAddTaskModalClose}
        taskListId={selectedListId}
      />
    </Box>
  );
};

export default TaskListCollection;
