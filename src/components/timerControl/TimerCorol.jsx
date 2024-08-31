
import Button from '../buttons/Button';
import FlexRow from '../FlexRow';

function TimerCorol() {
    return (
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
    );
}

export default TimerCorol;
