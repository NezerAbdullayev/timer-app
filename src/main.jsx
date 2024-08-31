import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ThemeProvider from './context/ThemeProvider.jsx';
import StopwatchProvider from './context/StopwatchProvider.jsx';

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <StopwatchProvider>
            <App />
        </StopwatchProvider>
    </ThemeProvider>
);
