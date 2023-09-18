import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
      h1: {
        fontSize: 40,
        color: '#67595E',
        fontFamily: 'B612 Mono'
    },
     h2: {
      fontSize: 30,
      fontFamily: 'B612 Mono',
      color: '#533638'
    },

    h3: {
      fontSize: 50,
      fontFamily: 'Notable',
      color: '#543336'
    },

    h4: {
      fontSize: 30,
      fontFamily: 'B612 Mono',
      color: '#67595E'
    },

    h5: {
      fontSize: 30,
      fontFamily: 'B612 Mono',
      color: '#533638'
    }
  },
});

export default theme;