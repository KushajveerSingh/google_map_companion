import { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme, alpha, styled } from '@mui/material/styles';
import type { TypeHeaderProps } from '../@types';

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
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

const Header = ({ setCoordinates }: TypeHeaderProps) => {
  const theme = useTheme();
  const [autoComplete, setAutoComplete] = useState<any>(null);

  const onLoad = (autoC: any) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    if (autoComplete) {
      if (autoComplete.getPlace().geometry) {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();
        setCoordinates({ lat, lng });
      } else {
        alert(
          'The name you entered in the search box is incorrect. Please, select a correct value from the drop-down menu as you type'
        );
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.secondary.dark }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Map Companion
          </Typography>

          <Box display="flex" alignItems="center">
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Explore new places
            </Typography>

            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
