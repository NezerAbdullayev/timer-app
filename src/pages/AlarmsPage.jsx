// import fake data
// import component

import GridColoms from '../components/ui/GridColoms';
import PageTitle from '../components/ui/PageTitle';
import Toolbar from '../components/ui/Toolbar';
import { alarms } from '../fakeData/fakeDate';
import AlarmsBoxGroup from '../components/alarms/AlarmsBoxGroup';


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
