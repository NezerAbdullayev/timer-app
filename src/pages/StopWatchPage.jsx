//  import components
import Button from '../components/buttons/Button';
import FlexRow from '../components/FlexRow';
import GridColoms from '../components/GridColoms';
// import TimerCorol from '../components/timerControl/TimerCorol';
import StopwatchBoxGroup from '../components/boxGroup/stopWatchGroup/StopWatchBoxGroup';
import StopwatchInput from '../components/stopwatchInput/StopwatchInput';

// fake data
import { useStopwatch } from '../Hooks/useStopwatch';

function StopwatchPage() {
    const {
        state: { isRunning, time, lapTime, history },
        dispatch,
    } = useStopwatch();

    console.log(history);

    const handleStart = () => dispatch({ type: 'START' });
    const handleStop = () => dispatch({ type: 'PAUSE' });
    const handleReset = () => dispatch({ type: 'RESET' });
    const handleLap = () => dispatch({ type: 'LAP' });
    const handleClearHistory = () => dispatch({ type: 'CLEAR_HISTORY' });

    return (
        <GridColoms className="grid-rows-[30%_55%_15%]">
            {/*  Stopwatch */}
            <GridColoms className="grid w-full place-items-center">
                <StopwatchInput value={time} />

                {history.length > 0 && lapTime > 0 && <StopwatchInput type="lap" value={lapTime} />}
            </GridColoms>
            {/*  Stopwatch  end*/}

            {/* history container */}
            <StopwatchBoxGroup />

            {/* Stopwatch control buttons */}
            <FlexRow className="justify-evenly gap-5">
                {/* start condition */}
                {!isRunning && !time && (
                    <>
                        <Button type="muiGray" disabled={true}>
                            Reset
                        </Button>
                        <Button type="muiBlue" onClick={handleStart}>
                            Start
                        </Button>
                    </>
                )}

                {/* pause and lop condition */}
                {isRunning && (
                    <>
                        <Button type="muiGray" onClick={handleLap}>
                            Lap
                        </Button>
                        <Button type="muiBlue" onClick={handleStop}>
                            Pause
                        </Button>
                    </>
                )}

                {/* pause and reseet condition */}
                {!isRunning && time !== 0 && (
                    <>
                        <Button type="muiGray" onClick={handleReset}>
                            Reset
                        </Button>
                        <Button type="muiBlue" onClick={handleStart}>
                            Start
                        </Button>
                    </>
                )}
            </FlexRow>
        </GridColoms>
    );
}

export default StopwatchPage;
