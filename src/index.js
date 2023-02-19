import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#ffffff',
    grey: `#dddddd`,
    darkGrey: '#565656',
    black: '#161616',
    accent: '#ff8000',
  },
  media: {
    tablet: `@media screen and (min-width: 768px)`,
    desktop: `@media screen and (min-width: 1024px)`,
  },
  shadows: {
    boxAccent: `0 1px 1px #ff6b01, 0 4px 4px #ff6b08, 1px 4px 6px #ff6b01;`,
    boxDark: `0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%), 1px 4px 6px rgb(0 0 0 / 16%);`,
  },
  cubic: `250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  visuallyHidden: `position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
