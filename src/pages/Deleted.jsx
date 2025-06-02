import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restoreTask, hardDeleteTask } from '../redux/tasksSlice';
import { Button, Typography, Box } from '@mui/material';

const Deleted = () => {
  const dispatch = useDispatch();
  const deletedTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.deleted_at !== null)
  );

  const handleRestore = (id) => {
    dispatch(restoreTask(id));
  };

  const handleHardDelete = (id) => {
    dispatch(hardDeleteTask(id));
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Видалені задачі
      </Typography>
      {deletedTasks.length === 0 ? (
        <Typography>Немає видалених задач.</Typography>
      ) : (
        deletedTasks.map((task) => (
          <Box
            key={task.id}
            mb={2}
            p={2}
            border="1px solid #ccc"
            borderRadius={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography fontWeight="bold">{task.title}</Typography>
              <Typography variant="body2">{task.description}</Typography>
            </Box>
            <Box display="flex" gap={1}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleRestore(task.id)}
              >
                Відновити
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleHardDelete(task.id)}
              >
                Видалити назавжди
              </Button>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Deleted;
