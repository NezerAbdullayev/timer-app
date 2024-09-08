import FlexRow from '../../../components/FlexRow';
import Row from '../../../components/Row';
import { useTimer } from '../../../Hooks/useTimer';
import TimerInput from './TimerInput';

function TimerInputContainer() {
    const {
        state: { time, isReset },
        dispatch,
    } = useTimer();

    const { hh = '00', mm = '00', ss = '00' } = time;

    function onChangeInput(e) {
        const { name, value } = e.target;

        const parsedValue = Math.max(
            0,
            Math.min(parseInt(value.replace(/[^0-9]/g, '')) || 0, name === 'hh' ? 23 : 59)
        );

        dispatch({
            type: 'SET_TIME',
            payload: { [name]: parsedValue.toString().padStart(2, '0') },
        });
    }

    return (
        <FlexRow className="my-6 items-start justify-center">
            {/* hour */}
            <FlexRow className="flex-col items-center text-sm">
                <Row className="text-stone-700 dark:text-stone-400">hour</Row>
                <TimerInput
                    max={23}
                    min={0}
                    value={hh}
                    name="hh"
                    onChangeInput={onChangeInput}
                    disbaled={isReset}
                />
            </FlexRow>

            <span className="mt-4 text-3xl">:</span>
            {/* minute */}
            <FlexRow className="flex-col items-center text-sm">
                <Row className="text-stone-700 dark:text-stone-400">minute</Row>
                <TimerInput
                    max={59}
                    min={0}
                    value={mm}
                    name="mm"
                    onChangeInput={onChangeInput}
                    disbaled={isReset}
                />
            </FlexRow>

            <span className="mt-4 text-3xl">:</span>

            {/* seconds */}
            <FlexRow className="flex-col items-center text-sm">
                <Row className="text-stone-700 dark:text-stone-400">seconds</Row>
                <TimerInput
                    max={59}
                    min={0}
                    value={ss}
                    name="ss"
                    onChangeInput={onChangeInput}
                    disbaled={isReset}
                />
            </FlexRow>
        </FlexRow>
    );
}

export default TimerInputContainer;
