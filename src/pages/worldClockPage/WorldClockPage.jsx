// import  components
import GridColoms from '../../components/GridColoms';
import Toolbar from '../../components/Toolbar';
import WorldClockBoxGroup from './components/WorldClockBoxGroup';
import TimerTitle from '../timerPage/components/TimerTitle';

function WorldClockPage() {
    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <TimerTitle />


            <Toolbar />

            <WorldClockBoxGroup  />
        </GridColoms>
    );
}

export default WorldClockPage;
