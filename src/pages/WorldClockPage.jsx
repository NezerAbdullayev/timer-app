// import  components
import WorldClockBoxGroup from '../components/boxGroup/worldClockGroup/WorldClockBoxGroup';
import GridColoms from '../components/GridColoms';
import PageTitle from '../components/pageTitle/PageTitle';
import Toolbar from '../components/toolbar/Toolbar';
import { worldClock } from '../fakeData/fakeDate';

function WorldClock() {
    return (
        <GridColoms>
            <PageTitle
                title="alarm in 10 hours 51 minutes"
                desc="the 29 Aug, 07:50"
            />

            <Toolbar />

            <WorldClockBoxGroup items={worldClock} />
        </GridColoms>
    );
}

export default WorldClock;
