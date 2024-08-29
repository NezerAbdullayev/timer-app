import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

// import pages
import WorldClock from './pages/WorldClock';
import StopWatch from './pages/StopWatch';
import Timer from './pages/Timer';
import Alarms from './pages/Alarms';

// import  components

function App() {
    {
        /* routing */
    }

    <>
        <div className='font-serif text-sm text-stone-500 bg-red-200'>heefef</div>
    
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/alarms" replace />} />
                <Route path="/alarms" element={<Alarms />} />
                <Route path="/worldclock" element={<WorldClock />} />
                <Route path="/stopwatch" element={<StopWatch />} />
                <Route path="/timer" element={<Timer />} />
            </Routes>
        </Router>
        ;
    </>;
}

export default App;
