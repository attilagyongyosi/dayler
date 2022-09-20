import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

const appElementId = 'app';
const appElement = document.getElementById(appElementId) as HTMLElement;

ReactDOM.createRoot(appElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
