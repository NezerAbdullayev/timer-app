import { memo } from 'react';
import Button from '../../../components/Button';
import FlexRow from '../../../components/FlexRow';

function TimeController({ isReset, dispatch, isRunning }) {
    const handleStart = () => dispatch({ type: 'START' });
    const handleStop = () => dispatch({ type: 'PAUSE' });
    const handleReset = () => dispatch({ type: 'RESET' });
    const handleLap = () => dispatch({ type: 'LAP' });

    return (
        <FlexRow className="items-center justify-evenly gap-5">
            {/* start condition */}
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
            {!isRunning && isReset && (
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

export default memo(TimeController);
