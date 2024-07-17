'use client';
import { useAppSelector } from '@/lib/redux';

export default function Home() {
  const state = useAppSelector((state) => state);

  console.log(state, 'state');
  return <h1>hello</h1>;
}
