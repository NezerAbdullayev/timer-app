// import component
import BoxContainer from '../components/boxContainer/BoxContainer';
import Toolbar from '../components/toolbar/Toolbar';
import PageTitle from '../components/pageTitle/PageTitle';


function AlarmsPage() {
    return (
        <div className=''>
            <PageTitle
                title="alarm in 10 hours 51 minutes"
                desc="the 29 Aug, 07:50"
            />

            <Toolbar />

            <BoxContainer items/>

        </div>
    );
}

export default AlarmsPage;
