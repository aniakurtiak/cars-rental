import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {

  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/car-rental">
        <ThemeProvider theme = {theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);
