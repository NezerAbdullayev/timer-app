// import component
import BoxGroup from '../components/boxContainer/BoxContainer';
import Toolbar from '../components/toolbar/Toolbar';
import PageTitle from '../components/pageTitle/PageTitle';
import { alarms } from '../fakeData/fakeDate';


function AlarmsPage() {
    return (
        <div className='grid grid-rows-[20%_15%_65%] h-full'>
            <PageTitle
                title="alarm in 10 hours 51 minutes"
                desc="the 29 Aug, 07:50"
            />

            <Toolbar />

            <BoxGroup items={alarms}/>

        </div>
    );
}

export default AlarmsPage;
