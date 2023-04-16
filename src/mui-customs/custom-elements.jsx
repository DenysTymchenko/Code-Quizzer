import { styled, TextField } from '@mui/material';

export const SearchBar = styled(TextField)({
  width: '500px',
  '& label.Mui-focused': {
    color: 'var(--secondary)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--secondary)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#var(--main-alt)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--secondary)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--secondary)',
    },
  },
  '@media (max-width:600px)': {
    width: '300px',
  },
});

export const Input = styled(TextField)({
  width: '100%',
  '& label': {
    color: 'var(--main-alt)',
  },
  '& label.Mui-focused': {
    color: 'var(--main-alt)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--main)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--main-alt)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--main)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--main-alt)',
    },
  },
  '@media (max-width:600px)': {
    width: '300px',
  },
});
