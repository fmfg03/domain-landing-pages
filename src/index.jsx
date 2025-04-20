import React from 'react';
import { createRoot } from 'react-dom/client';
import DomainRouter from './components/DomainRouter';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(DomainRouter));
