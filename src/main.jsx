import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ThemeProvider from './context/ThemeProvider.jsx';
import StopwatchProvider from './context/StopwatchProvider.jsx';
import AlarmsProvider from './context/AlarmsProvider.jsx';
import TimerProvider from './context/TimerProvider.jsx';
import WorldClockProvider from './context/WorldClockProvider.jsx';

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <TimerProvider>
            <StopwatchProvider>
                <WorldClockProvider>
                    <AlarmsProvider>
                        <App />
                    </AlarmsProvider>
                </WorldClockProvider>
            </StopwatchProvider>
        </TimerProvider>
    </ThemeProvider>
);
