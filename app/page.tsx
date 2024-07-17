'use client';
import { useAppDispatch, useAppSelector } from '@/lib/redux';
import { addTask, addTaskList } from '@/lib/redux/reducers/todoList.reducers';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Home() {
  const { taskLists } = useAppSelector((state) => state.taskListCollection);
  const dispatch = useAppDispatch();

  useEffect(() => {
    toast.success('hello');
  }, []);
  return <h1>hello</h1>;
}
