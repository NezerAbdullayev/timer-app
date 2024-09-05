// import hooks
import { useTimer } from '../../Hooks/useTimer';
// import components
import GridColoms from '../../components/ui/GridColoms';
import TimerControl from './components/TimerControl';
import TimerInputContainer from './components/TimerInputContainer';
import TimerTitle from './components/TimerTitle';

function TimerPage() {
    const {dispatch,state:{isRunning,isReset}} = useTimer();






    return (
        <GridColoms className="grid-rows-[15%_20%_10%_55%]">

            <TimerTitle />

            <TimerInputContainer dispatch={dispatch}  isRunning={isRunning} isReset={isReset} />
            
            <TimerControl />

            {/* <TimeController dispatch={dispatch}  isRunning={isRunning} /> */}

        </GridColoms>
    );
}

export default TimerPage;
