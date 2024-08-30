// import  components
import WorldClockBoxGroup from '../components/boxGroup/worldClockGroup/WorldClockBoxGroup';
import GridColoms from '../components/GridColoms';
import PageTitle from '../components/PageTitle';
import Toolbar from '../components/toolbar/Toolbar';
import { worldClock } from '../fakeData/fakeDate';

function WorldClockPage() {
    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <PageTitle title="23:37:38" desc="Azerbaijan Standard Time" />

            <Toolbar />

            <WorldClockBoxGroup items={worldClock} />
        </GridColoms>
    );
}

export default WorldClockPage;