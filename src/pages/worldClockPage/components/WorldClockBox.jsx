import { useEffect, useState } from 'react';
// import BoxContainer from '../../../components/BoxContainer';
import BoxContainer from '../../../components/boxGroup/BoxContainer';
import Row from '../../../components/Row';
import GridRow from '../../../components/GridRow';
import FlexRow from '../../../components/FlexRow';

function WorldClockBox({
    id,
    cityName = 'ede',
    offset,
    OpenDelete,
    onDelete,
}) {
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
            {/* delete button */}
            <GridRow className={`grid place-items-center ${OpenDelete ? 'grid' : 'hidden'}`}>
                <button
                    onClick={() => onDelete(id)}
                    className="flex-0 h-10 w-10 cursor-pointer rounded-full bg-[#a2a6ac] text-stone-100 transition-all hover:bg-[#82868c]"
                >
                    &#10006;
                </button>
            </GridRow>

            {/* box  start */}
            <FlexRow className="flex-1 items-center justify-between">
                {/* city */}
                <Row className="">{cityName}</Row>

                {/* history and active button */}
                <Row className="text-2xl text-lightMain transition-all sm:text-3xl">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Row>
            </FlexRow>
        </BoxContainer>
    );
}

export default WorldClockBox;
