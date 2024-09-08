import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// outlet
import { Outlet } from 'react-router';

// import components
import Footer from './footer/Footer';
import Container from './Container';
import Main from './Main';
import FlexRow from '../components/FlexRow';
import { Button } from '@mui/material';

function AppLayout() {
    const [isDarkMode, setIsDarkMode] = useState(true);



    const handleToggleDarkMode=()=>{
        setIsDarkMode(isDarkMode=>!isDarkMode)
    }

    // dark mode
    useEffect(() => {
        if (isDarkMode === true) document.getElementById('root').classList.add('dark');
        else document.getElementById('root').classList.remove('dark');
    }, [isDarkMode]);

    return (
        <Container>
            <FlexRow className="items-end justify-center">
                <Button
                onClick={handleToggleDarkMode}
                    sx={{
                        background: isDarkMode ? '#a1a1a1' : 'black',
                        height: '30px',
                        color: isDarkMode ? 'black' : 'white',
                    }}
                >
                    {isDarkMode ? 'Light Mode' : 'dark Mode'}
                </Button>
            </FlexRow>
            <Main>
                <Outlet />
            </Main>

            <Footer />

            {/* toast library */}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                style={{ top: '100px' }}
            />
        </Container>
    );
}

export default AppLayout;
