import { toast } from 'react-toastify';
import Button from '../../../components/Button';
import FlexRow from '../../../components/FlexRow';
import { useTimer } from '../../../Hooks/useTimer';
import { useCallback, useMemo } from 'react';

function TimerControl() {
    const {
        dispatch,
        state: {
            isRunning,
            isReset,
            time: { hh, mm, ss },
        },
    } = useTimer();

    const isStartDisabled = useMemo(() => hh === '00' && mm === '00' && ss === '00', [hh, mm, ss]);

    const handleStart = () => {
        if (isStartDisabled) {
            toast.error("choose a time if you don't mind");
            return;
        }
        if (!isReset) dispatch({ type: 'ADD_TO_HISTORY', payload: { hh, mm, ss } });
        dispatch({ type: 'START' });
    };

    const handleStop = useCallback(() => dispatch({ type: 'PAUSE' }), [dispatch]);
    const handleReset = useCallback(() => dispatch({ type: 'RESET' }), [dispatch]);

    return (
        <FlexRow className="items-center justify-evenly gap-5">
            {/* start  */}
            {!isRunning && !isReset && (
                <>
                    <Button type="muiGray" disabled={true}>
                        Reset
                    </Button>
                    <Button type="muiBlue" onClick={handleStart} disabled={isStartDisabled}>
                        Start
                    </Button>
                </>
            )}

            {/* reset  */}
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
        </FlexRow>
    );
}

export default TimerControl;
