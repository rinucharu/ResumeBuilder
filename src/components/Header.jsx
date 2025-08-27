import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WorkIcon from '@mui/icons-material/Work';
import Tooltip from '@mui/material/Tooltip';
import { positions } from '@mui/system';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky-top">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
          >
            <WorkIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          <Tooltip title="We are dedicated to helping individuals create professional, polished, and impactful resumes with ease. Our resume builder is designed to simplify the process, offering user-friendly tools, modern templates, and expert guidance to highlight your skills and achievements effectively. Whether you are a student, fresher, or experienced professional, we aim to empower you to stand out in today’s competitive job market." placement="bottom-start">
            <Button color='inherit'>About Us</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header