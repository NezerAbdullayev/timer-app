import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import WorldClock from './pages/WorldClock';
import StopWatch from './pages/StopWatch';
import Timer from './pages/Timer';
import Alarms from './pages/Alarms';
import GlobalStyles from './styles/GlobalStyles';

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Navigate to="/alarms" replace />} />
                <Route path="/alarms" element={<Alarms />} />
                <Route path="/worldclock" element={<WorldClock />} />
                <Route path="/stopwatch" element={<StopWatch />} />
                <Route path="/timer" element={<Timer />} />
            </Routes>
        </Router>
    );
}

export default App;
