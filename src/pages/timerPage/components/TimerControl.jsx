import Button from '../../../components/Button';
import FlexRow from '../../../components/FlexRow';
import { useTimer } from '../../../Hooks/useTimer';

function TimerControl() {
    const {
        dispatch,
        state: { isRunning, isReset },
    } = useTimer();

    const handleStart = () => dispatch({ type: 'START' });
    const handleStop = () => dispatch({ type: 'PAUSE' });
    const handleReset = () => dispatch({ type: 'RESET' });

    return (
        <FlexRow className="items-center justify-evenly gap-5">
            {/* start  */}
            {!isRunning && !isReset && (
                <>
                    <Button type="muiGray" disabled={true}>
                        Reset
                    </Button>
                    <Button type="muiBlue" onClick={handleStart}>
                        Start
                    </Button>
                </>
            )}

            {/* pause  */}
            {!isRunning && isReset && (
                <>
                    <Button type="muiGray">Reset</Button>
                    <Button type="muiBlue" onClick={handleStart}>
                        Start
                    </Button>
                </>
            )}

            {/* pause  */}
            {isRunning && (
                <>
                    <Button type="muiGray" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button type="muiBlue" onClick={handleStop}>
                        Pause
                    </Button>
                </>
            )}

            {/* pause and reseet condition */}
            {/* {!isRunning && isReset && (
                <>
                    <Button type="muiGray" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button type="muiBlue" onClick={handleStart}>
                        Start
                    </Button>
                </>
            )} */}
        </FlexRow>
    );
}

export default TimerControl;
