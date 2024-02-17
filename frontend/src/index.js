import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot corretamente
import './index.css';
import App from './main/app';
import reportWebVitals from './reportWebVitals';

// Use createRoot para renderizar o aplicativo
const root = createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();
