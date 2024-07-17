'use client';
import { useEffect } from 'react';
import Image from 'next/image';

import { Box } from '@mui/material';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '@/lib/redux';
import { addTask, addTaskList } from '@/lib/redux/reducers/todoList.reducers';
import icons from './_assets/svgs';

export default function Home() {
  const { taskLists } = useAppSelector((state) => state.taskListCollection);
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  return (
    <Box>
      <Image src={icons.addIcon} alt="addIcon" />
    </Box>
  );
}
