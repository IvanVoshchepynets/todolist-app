import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('1'); // тип складності

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date().toISOString();

    dispatch(
      addTask({
        id: uuidv4(),
        title,
        description,
        type,
        status: false,
        created_at: now,
        updated_at: now,
        deleted_at: null,
      })
    );

    navigate('/tasks');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom mt={4}>
        Додати нове завдання
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <TextField
          label="Назва"
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Опис"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Тип складності"
          select
          fullWidth
          value={type}
          onChange={(e) => setType(e.target.value)}
          margin="normal"
        >
          {[1, 2, 3, 4, 5].map((level) => (
            <MenuItem key={level} value={level.toString()}>
              Тип {level}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Додати
        </Button>
      </Box>
    </Container>
  );
};

export default AddTask;
