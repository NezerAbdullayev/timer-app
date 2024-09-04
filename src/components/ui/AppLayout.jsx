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
        </Container>
    );
}

export default AppLayout;
