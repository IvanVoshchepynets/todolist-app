import React from 'react';
import { gql, useQuery } from '@apollo/client';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
  Paper,
} from '@mui/material';

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      description
      type
    }
  }
`;

function GraphQLTasks() {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Помилка завантаження даних</Alert>;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Задачі з GraphQL
      </Typography>
      <List>
        {data.tasks.map((task) => (
          <Paper key={task.id} sx={{ mb: 2, p: 2 }}>
            <ListItem disablePadding>
              <ListItemText
                primary={`${task.title} (Тип складності: Тип ${task.type})`}
                secondary={task.description}
              />
            </ListItem>
          </Paper>
        ))}
      </List>
    </div>
  );
}

export default GraphQLTasks;
