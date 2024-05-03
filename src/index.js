import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import App from './App';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Arial";
        scrollbar-width: none;
        -ms-overflow-style: none; 
        &::-webkit-scrollbar {
          display: none; 
        }
    }

    body {
        font-family: "Rubik", "sans-serif";
        font-weight: 400;
        color: #000;
        margin: 0;
    }

    html, body, #root{
        height: 100%;
        width: 100%;
    }
    #root {
      position: relative;
      background: #1c1c1c;
    }
`;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);