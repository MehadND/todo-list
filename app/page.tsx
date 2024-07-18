'use client';
import { Box, Container, Typography } from '@mui/material';

import { TaskListCollection } from './_components/homeComponents';

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" align="center" mt={10} >
        To-Do List Application
      </Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "calc(100vh - 200px)"
      }}>
        <TaskListCollection />
      </Box>
    </Container>
  );
}
