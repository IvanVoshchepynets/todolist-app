import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../redux/tasksSlice';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
} from '@mui/material';

const EditTask = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const task = useSelector((state) =>
    state.tasks.tasks.find((t) => t.id === id)
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDifficulty(task.type); // 'type' використовується як 'складність'
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTask({
        id,
        title,
        description,
        type: difficulty, // передаємо як 'type', бо така назва в slice
      })
    );
    navigate('/tasks');
  };

  if (!task) {
    return <Typography>Задачу не знайдено.</Typography>;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Редагувати задачу
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Назва"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Опис"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
        />
        <TextField
          label="Тип складності"
          select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        >
          {[1, 2, 3, 4, 5].map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" color="primary" type="submit">
          Зберегти
        </Button>
      </Box>
    </Container>
  );
};

export default EditTask;
