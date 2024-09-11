import { useEffect, useState } from 'react';
import { useWorldClock } from '../../../Hooks/useWorldClock';
// import BoxContainer from '../../../components/BoxContainer';
import BoxContainer from '../../../components/boxGroup/BoxContainer';
import Row from '../../../components/Row';
import GridRow from '../../../components/GridRow';
import FlexRow from '../../../components/FlexRow';
import { getSecondaryText } from '../../../utils/getSecondaryText';

function WorldClockBox({ id, cityName, offset, openDelete }) {
    const [time, setTime] = useState(new Date());
    const { dispatch } = useWorldClock();

    function handleClockDelete(id) {
        dispatch({ type: 'DELETE_CLOCK', payload: id });
    }

    useEffect(() => {
        const updateClock = () => {
            const currentTime = new Date();
            const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
            const localTime = new Date(utcTime + 3600000 * offset);

            if (
                currentTime.getMinutes() > time.getMinutes()  && Number(currentTime.getMinutes()) !== 0
            ) {
                setTime(localTime);
            }
        };

        updateClock();

        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, [offset, time]);

    return (
        <BoxContainer>
            {/* delete button */}
            <GridRow className={`grid place-items-center ${openDelete ? 'grid' : 'hidden'}`}>
                <button
                    onClick={() => handleClockDelete(id)}
                    className="flex-0 h-10 w-10 cursor-pointer rounded-full bg-[#a2a6ac] text-stone-100 transition-all hover:bg-[#82868c]"
                >
                    &#10006;
                </button>
            </GridRow>

            {/* box  start */}
            <FlexRow className="flex-1 items-center justify-between">
                {/* city */}
                <FlexRow className="flex-col gap-[2px]">
                    <Row className="text-stone-50">{cityName}</Row>
                    <Row className="text-sm text-stone-300 dark:text-stone-500">
                        {getSecondaryText(offset)}
                    </Row>
                </FlexRow>

                {/* history and active button */}
                <Row className="text-2xl text-lightMain transition-all sm:text-3xl">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Row>
            </FlexRow>
        </BoxContainer>
    );
}

export default WorldClockBox;
