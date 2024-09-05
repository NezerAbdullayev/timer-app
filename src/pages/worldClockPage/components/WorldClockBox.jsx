import { useEffect, useState } from 'react';
import BoxContainer from '../../../components/ui/BoxContainer';
import Row from '../../../components/ui/Row';

function WorldClockBox({ id, cityName = 'ede', comparison, clockTime, offset }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const updateClock = () => {
            const currentTime = new Date();
            const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
            const localTime = new Date(utcTime + 3600000 * offset);
            setTime(localTime);
        };

        updateClock();

        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, [offset]);

    return (
        // box container bu olacaqdir
        <BoxContainer>
            {/* city */}
            <Row className="">{cityName}</Row>

            {/* history and active button */}
            <Row className="text-2xl text-lightMain transition-all sm:text-3xl">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Row>
        </BoxContainer>
    );
}

export default WorldClockBox;
