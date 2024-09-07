import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// outlet
import { Outlet } from 'react-router';

// import components
import Footer from './footer/Footer';
import Container from './Container';
import Main from './Main';

function AppLayout() {
    return (
        <Container>
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
