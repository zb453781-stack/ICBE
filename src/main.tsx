import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './app/App';
import './styles/index.css';
import { initializeGA } from './lib/analytics';

// Initialize Google Analytics
initializeGA();

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
  