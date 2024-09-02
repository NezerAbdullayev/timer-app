import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ThemeProvider from './context/ThemeProvider.jsx';
import StopwatchProvider from './context/StopwatchProvider.jsx';
import AlarmsProvider from './context/AlarmsProvider.jsx';

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <StopwatchProvider>
            <AlarmsProvider>
                <App />
            </AlarmsProvider>
        </StopwatchProvider>
    </ThemeProvider>
);
