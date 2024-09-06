import FlexRow from '../../../components/FlexRow';
import Row from '../../../components/Row';
import TimerInput from './TimerInput';
import { useTimer } from '../../../Hooks/useTimer';

function TimerInputContainer() {
    const { state, dispatch } = useTimer();
    const { hh, mm, ss } = state.time;

    const handleChange = (unit) => (value) => {
        const parsedValue = Math.max(0, Math.min(parseInt(value) || 0, unit === 'hh' ? 23 : 59));
        dispatch({
            type: 'SET_TIME',
            payload: { ...state.time, [unit]: parsedValue.toString().padStart(2, '0') },
        });
    };

    return (
        <FlexRow className="my-6 items-center justify-center">
            <FlexRow className="flex-col items-center text-sm">
                <Row className="text-stone-400">hour</Row>
                <TimerInput max={23} min={0} value={hh} onChangeInput={handleChange('hh')} />
            </FlexRow>

            <span className="mt-4 text-3xl">:</span>

            <FlexRow className="flex-col items-center text-sm">
                <Row className="text-stone-400">minute</Row>
                <TimerInput max={59} min={0} value={mm} onChangeInput={handleChange('mm')} />
            </FlexRow>

            <span className="mt-4 text-3xl">:</span>

            <FlexRow className="flex-col items-center text-sm">
                <Row className="text-stone-400">seconds</Row>
                <TimerInput max={59} min={0} value={ss} onChangeInput={handleChange('ss')} />
            </FlexRow>
        </FlexRow>
    );
}

export default TimerInputContainer;
