import React from 'react';

import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Checkbox,
  Grid,
  FormControl,
} from '@mui/material';

import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch } from '@/lib/redux/store';
import { addTask } from '@/lib/redux/reducers/todoList.reducers';

interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  taskListId: string;
}

interface FormValues {
  title: string;
  description: string;
  dueDate: Dayjs | null;
  reminder: boolean;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  open,
  onClose,
  taskListId,
}) => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    clearErrors,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      title: '',
      description: '',
      dueDate: null,
      reminder: false,
    },
  });

  const handleAddTask: SubmitHandler<FormValues> = (data) => {
    dispatch(
      addTask({
        taskListId,
        title: data.title,
        description: data.description,
        dueDate: data.dueDate ? data.dueDate.toISOString() : null,
        reminder: data.reminder,
      }),
    );

    closeModal();
  };

  const closeModal = () => {
    reset();
    onClose();
  };

  return (
    <Modal open={open} onClose={closeModal}>
      <form onSubmit={handleSubmit(handleAddTask)}>
        <Box
          sx={{
            p: 4,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            maxWidth: 400,
            mx: 'auto',
          }}
        >
          <Typography variant="h6" mb={2}>
            Add a to do
          </Typography>
          <Controller
            name="title"
            control={control}
            rules={{ required: 'Task title is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Task Title"
                fullWidth
                margin="normal"
                error={!!errors.title}
                helperText={errors.title ? errors.title.message : ''}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: 'Description is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                fullWidth
                margin="normal"
                error={!!errors.description}
                helperText={
                  errors.description ? errors.description.message : ''
                }
              />
            )}
          />
          <Grid item xs={12}>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name="dueDate"
                  control={control}
                  rules={{
                    required: 'Due date is required',
                    validate: {
                      date: (value) =>
                        dayjs(value).isValid !== null || 'Invalid Date',
                      min: (value) =>
                        dayjs().isBefore(value) ||
                        'Delivery date cannot be in the past ',
                    },
                  }}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      label="Due Date"
                      format="DD.MM.YYYY"
                      value={dayjs(field.value)}
                      onChange={(newValue) => {
                        setValue('dueDate', newValue);
                        clearErrors('dueDate');
                      }}
                      slotProps={{
                        textField: {
                          helperText: errors.dueDate
                            ? errors.dueDate?.message
                            : '',
                          error: errors.dueDate?.message ? true : false,
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>
          <Box display="flex" alignItems="center" mt={2}>
            <Typography>Set Reminder</Typography>
            <Controller
              name="reminder"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  checked={field.value}
                  onChange={(e) => setValue('reminder', e.target.checked)}
                />
              )}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add a to do
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
