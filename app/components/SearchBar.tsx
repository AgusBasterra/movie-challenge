"use client"

import { Box, Toolbar, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));

const SearchInput = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleOnChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', '1');
    
    if (value){
      params.set('query', value);
    } else {
      params.delete('query');
    }

    replace(`/?${params.toString()}`);
  }, 600)

  return (
      <Box sx={{ flexGrow: 1 }}>
          <Toolbar>
              <Search>
              <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                  placeholder="Buscar..."
                  onChange={e => handleOnChange(e.target.value)}
                  fullWidth
              />
              </Search>
          </Toolbar>
      </Box>
  );

};

export default SearchInput;
