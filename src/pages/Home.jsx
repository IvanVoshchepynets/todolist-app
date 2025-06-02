import React, { useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatus, softDeleteTask } from '../redux/tasksSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.deleted_at === null)
  );

  const [sortBy, setSortBy] = useState('title_asc');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleToggle = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleDelete = (id) => {
    dispatch(softDeleteTask(id));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const filteredTasks = allTasks.filter((task) => {
    if (filterStatus === 'completed') return task.status === true;
    if (filterStatus === 'active') return task.status === false;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    switch (sortBy) {
      case 'title_asc':
        return a.title.localeCompare(b.title);
      case 'title_desc':
        return b.title.localeCompare(a.title);
      case 'status':
        return a.status - b.status;
      case 'difficulty':
        return a.type - b.type;
      default:
        return 0;
    }
  });

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Актуальні завдання
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <FormControl>
          <InputLabel>Сортувати</InputLabel>
          <Select
            value={sortBy}
            label="Сортувати"
            onChange={(e) => setSortBy(e.target.value)}
            size="small"
          >
            <MenuItem value="title_asc">Назва A-Z</MenuItem>
            <MenuItem value="title_desc">Назва Z-A</MenuItem>
            <MenuItem value="status">Статус</MenuItem>
            <MenuItem value="difficulty">Складність</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Фільтр</InputLabel>
          <Select
            value={filterStatus}
            label="Фільтр"
            onChange={(e) => setFilterStatus(e.target.value)}
            size="small"
          >
            <MenuItem value="all">Всі</MenuItem>
            <MenuItem value="active">Незавершені</MenuItem>
            <MenuItem value="completed">Завершені</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <List>
        {sortedTasks.map((task) => (
          <ListItem
            key={task.id}
            secondaryAction={
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Tooltip title="Редагувати">
                  <IconButton edge="end" onClick={() => handleEdit(task.id)}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Видалити">
                  <IconButton edge="end" onClick={() => handleDelete(task.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            }
          >
            <Checkbox
              edge="start"
              checked={task.status}
              onChange={() => handleToggle(task.id)}
            />
            <ListItemText
              primary={`${task.title} (Складність: ${task.type})`}
              secondary={task.description}
              sx={{
                textDecoration: task.status ? 'line-through' : 'none',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Home;
