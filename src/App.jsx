import {
    Navigate,
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

// import pages
import WorldClockPage from './pages/WorldClockPage';
import StopwatchPage from './pages/StopwatchPage';   
import Timer from './pages/TimerPage';
import AlarmsPage from './pages/AlarmsPage';
import ErrorPage from './pages/ErrorPage';
import AppLayout from './components/AppLayout';


function App() {
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
                { path: 'timer', element: <Timer /> },
                { path: '*', element: <ErrorPage /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
