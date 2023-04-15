export const h1Styles = {
  textAlign: 'center',
  '@media (max-width:600px)': {
    fontSize: '4rem',
    fontWeight: 600,
  },
};

export const h2Styles = {
  textAlign: 'center',
  '@media (max-width:600px)': {
    fontSize: '2rem',
  },
};

export const h3Styles = {
  textAlign: 'center',
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
};

export const btnStyles = {
  color: 'var(--secondary-alt)',
  borderColor: 'var(--main-alt)',
  '&:hover': {
    borderColor: 'var(--main)',
  },
};

export const formBtnStyles = {
  color: 'var(--secondary)',
  backgroundColor: 'var(--main-alt)',
  '&:hover': {
    backgroundColor: 'var(--main)',
  },
};

export const modalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  bgcolor: '#252422',
  color: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  paddingBottom: '10px',
};
