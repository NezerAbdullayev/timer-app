// fake data
import { worldClock } from '../fakeData/fakeDate';



// import  components
import GridColoms from '../components/ui/GridColoms';
import PageTitle from '../components/ui/PageTitle';
import Toolbar from '../components/ui/Toolbar';
import WorldClockBoxGroup from '../components/worldClock/WorldClockBoxGroup';

function WorldClockPage() {

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
