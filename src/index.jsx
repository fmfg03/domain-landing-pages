import React from 'react';
import { createRoot } from 'react-dom/client';
import DomainRouter from './components/DomainRouter.jsx';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(DomainRouter));
