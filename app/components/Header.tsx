"use client"

import { Box, Typography, Toolbar, AppBar, useTheme, useMediaQuery } from '@mui/material';
import SearchInput from './SearchBar';
import Link from 'next/link';
import MenuItem from './MenuItem';
import { WbSunny, Brightness4 } from '@mui/icons-material';
import { useThemeToggle } from '../StyledRoot';


const Header = () => {
    const theme = useTheme();
    const { toggleTheme } = useThemeToggle();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href="/" passHref 
            style={{ 
                textDecoration: 'none', 
                color: 'inherit', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                }}>
          <Typography variant={isSmallScreen ? "body2" : "h6"}>
              Movie Recommendation
          </Typography>
        </Link>
        <Box display="flex" alignItems={'center'}>
            {'dark' === theme.palette.mode?  (
                <WbSunny onClick={toggleTheme} />
            ) : (
                <Brightness4 onClick={toggleTheme} />
            )}
          <SearchInput />
          <MenuItem />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;