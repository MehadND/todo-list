'use client';
import { Container, Typography } from '@mui/material';

import { TaskListCollection } from './_components/homeComponents';

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        To-Do List Application
      </Typography>
      <TaskListCollection />
    </Container>
  );
}
