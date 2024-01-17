import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const theme = {
  colors: {

  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename="/cars-rental">
          <ThemeProvider theme = {theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
