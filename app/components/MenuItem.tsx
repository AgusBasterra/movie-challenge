import React from 'react';

import { Button, IconButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Login } from '@mui/icons-material';


const MenuItem = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {isSmallScreen ? (
        <IconButton color="inherit">
          <Login />
        </IconButton>
      ) : (
        <Button color="inherit" startIcon={<Login />}>
          Login
        </Button>
      )}
    </>
  );
};
export default MenuItem