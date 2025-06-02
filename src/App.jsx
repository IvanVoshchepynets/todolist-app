import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Home from './pages/Home';
import Deleted from './pages/Deleted';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import GraphQLTasks from './pages/GraphQLTasks';

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { label: 'Актуальні', path: '/tasks' },
    { label: 'Видалені', path: '/deleted' },
    { label: 'Додати', path: '/add' },
    { label: 'GraphQL', path: '/graphql' },
  ];

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ToDo List
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 200 }}>
                  {navLinks.map((link) => (
                    <ListItem
                      button
                      key={link.label}
                      component={RouterLink}
                      to={link.path}
                      onClick={handleDrawerToggle}
                    >
                      <ListItemText primary={link.label} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  color="inherit"
                  component={RouterLink}
                  to={link.path}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<Home />} />
        <Route path="/deleted" element={<Deleted />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/graphql" element={<GraphQLTasks />} />
      </Routes>
    </Router>
  );
};

export default App;
