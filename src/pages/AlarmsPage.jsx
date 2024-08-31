// import fake data
import { alarms } from '../fakeData/fakeDate';
// import component
import AlarmsBoxGroup from '../components/boxGroup/alarmsGroup/AlarmsBoxGroup';
import Toolbar from '../components/toolbar/Toolbar';
import PageTitle from '../components/PageTitle';
import GridColoms from '../components/GridColoms';

function AlarmsPage() {
    console.log('alarms page');

    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <PageTitle
                className="justify-end"
                headerTitle="alarm in 10 hours 51 minutes"
                headerDesc="the 29 Aug, 07:50"
            />

            <Toolbar />

            <AlarmsBoxGroup items={alarms} />
        </GridColoms>
    );
}

export default AlarmsPage;
