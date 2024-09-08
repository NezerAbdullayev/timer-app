import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import StopwatchProvider from './context/StopwatchProvider.jsx';
import AlarmsProvider from './context/AlarmsProvider.jsx';
import TimerProvider from './context/TimerProvider.jsx';
import WorldClockProvider from './context/WorldClockProvider.jsx';

createRoot(document.getElementById('root')).render(
    <TimerProvider>
        <StopwatchProvider>
            <WorldClockProvider>
                <AlarmsProvider>
                    <App />
                </AlarmsProvider>
            </WorldClockProvider>
        </StopwatchProvider>
    </TimerProvider>
);
