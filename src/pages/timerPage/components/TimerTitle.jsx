import { useEffect, useState } from 'react';
import { getRealTime } from '../../../utils/getCurrentDateTime';
import Row from '../../../components/ui/Row';

function TimerTitle() {
    const [realTime, setRealTime] = useState(getRealTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setRealTime(getRealTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="flex flex-col justify-end text-center">
            <Row className="mb-2 text-3xl sm:text-4xl">{realTime}</Row>
            <Row className="text-base text-stone-600 sm:text-xl">Azerbaijan Standard Time</Row>
        </header>
    );
}

export default TimerTitle;
