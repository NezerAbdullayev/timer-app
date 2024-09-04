import { useState } from 'react';
import TimerInput from './TimerInput';
import FlexRow from "../../../components/ui/FlexRow"

function TimerInputContainer() {
    const [time, setTime] = useState({ hh: '00', mm: '00', ss: '00' });

    const handleChange = (unit) => (value) => {
        const parsedValue = Math.max(0, Math.min(parseInt(value) || 0, unit === 'hh' ? 23 : 59));
        setTime((prevTime) => ({
            ...prevTime,
            [unit]: parsedValue.toString().padStart(2, '0'),
        }));
    };

    console.log(time);

    return (
        <FlexRow className="item-center justify-center gap-5 my-6">
            <TimerInput max={23} min={0} value={time.hh} onChangeInput={handleChange('hh')} />
            <TimerInput max={59} min={0} value={time.mm} onChangeInput={handleChange('mm')}/>
            <TimerInput max={59} min={0} value={time.ss} onChangeInput={handleChange('ss')}/>
        </FlexRow>
    );
}

export default TimerInputContainer;
