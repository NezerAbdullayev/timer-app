// import components
import FlexRow from '../../components/FlexRow';
import GridColoms from '../../components/GridColoms';
import TimerControl from './components/TimerControl';
import TimerHistory from './components/TimerHistory';
import TimerInputContainer from './components/TimerInputContainer';
import TimerTitle from './components/TimerTitle';

function TimerPage() {
    return (
        <GridColoms className="grid-rows-[13%_29%_58%]">
            {/* <TimerTitle />

            <FlexRow className=" items-center flex-wrap  justify-center gap-x-20">
                <TimerInputContainer />

                <TimerControl />
            </FlexRow>

            <TimerHistory /> */}
        </GridColoms>
    );
}

export default TimerPage;
