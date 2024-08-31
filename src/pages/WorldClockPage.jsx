// import  components
import WorldClockBoxGroup from '../components/boxGroup/worldClockGroup/WorldClockBoxGroup';
import GridColoms from '../components/GridColoms';
import PageTitle from '../components/PageTitle';
import Toolbar from '../components/toolbar/Toolbar';
import { worldClock } from '../fakeData/fakeDate';

function WorldClockPage() {
    console.log('re-render');

    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <PageTitle
                className="justify-end"
                headerTitle="23:37:38"
                headerDesc="Azerbaijan Standard Time"
            />

            <Toolbar />

            <WorldClockBoxGroup items={worldClock} />
        </GridColoms>
    );
}

export default WorldClockPage;
