// import fake data
import { alarms } from '../fakeData/fakeDate';
// import component
import AlarmsBoxGroup from '../components/boxGroup/alarmsGroup/AlarmsBoxGroup';
import Toolbar from '../components/toolbar/Toolbar';
import PageTitle from '../components/PageTitle';
import GridColoms from '../components/GridColoms';

function AlarmsPage() {
    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <PageTitle
                title="alarm in 10 hours 51 minutes"
                desc="the 29 Aug, 07:50"
            />

            <Toolbar />

            <AlarmsBoxGroup items={alarms} />
        </GridColoms>
    );
}

export default AlarmsPage;
