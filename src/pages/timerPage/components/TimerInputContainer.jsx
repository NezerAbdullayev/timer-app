import { useState } from 'react';
import Row from '../../../components/ui/Row';
import TimerInput from './TimerInput';

function TimerInputContainer() {
    const [hh, setHh] = useState('00');
    const [mm, setMm] = useState('00');
    const [ss, SetSs] = useState('00');



    function handleChangeHour(e) {
        setHh(e.target.value);
    }

    function handleChangeMinute(e) {
        setMm(e.target.value);
    }

    function handleChangeSeconds(e) {
        SetSs(e.tager.value);
    }


    console.log("hours->",hh,":",mm,";",ss)

    return (
        <Row>
            <TimerInput max={23} min={0} value={hh} onChangeInput={handleChangeHour} />
            <TimerInput max={59} min={0} value={mm} onChangeInput={handleChangeMinute} />
            <TimerInput max={59} min={0} value={ss} onChangeInput={handleChangeSeconds} />
            {/* <TimerInput max={23} /> */}
        </Row>
    );
}

export default TimerInputContainer;
