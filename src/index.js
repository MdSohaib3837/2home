import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          
        },
        maxWidthSm: {
          paddingLeft: '20px',
          paddingRight: '20px'
        },
        maxWidthMd: {
          paddingLeft: '20px',
          paddingRight: '20px'
        },
        maxWidthLg: {
          paddingLeft: '20px',
          paddingRight: '20px'
        }
      }
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
