import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';

// import pages
import WorldClockPage from './pages/worldClockPage/WorldClockPage';
import StopwatchPage from './pages/stopwatchPage/StopWatchPage';
import TimerPage from './pages/timerPage/TimerPage';
import AlarmsPage from './pages/alarmsPage/AlarmsPage';
import ErrorPage from './pages/ErrorPage';

// component2
import AppLayout from './components/AppLayout';

function App() {
    console.log("app")
    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,
            errorElement: <ErrorPage />,
            children: [
                { path: '/', element: <Navigate to="/alarms" replace /> },
                { path: 'alarms', element: <AlarmsPage /> },
                { path: 'worldclock', element: <WorldClockPage /> },
                { path: 'stopwatch', element: <StopwatchPage /> },
                { path: 'timer', element: <TimerPage /> },
                { path: '*', element: <ErrorPage /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
