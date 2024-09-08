import { Button } from '@mui/material';
import GroupContainer from '../../../components/boxGroup/GroupContainer';
import GridColoms from '../../../components/GridColoms';
import GridRow from '../../../components/GridRow';
import Row from '../../../components/Row';
import FlexRow from '../../../components/FlexRow';
import { useTimer } from '../../../Hooks/useTimer';
import TimerBox from './TimerBox';

function TimerHistory() {
    const {
        state: { timerHistory },
        dispatch,
    } = useTimer();

    const resetHistory = () => {
        dispatch({ type: 'RESET_HISTORY' });
    };

    return (
        <GridRow className="mb-2 h-full w-full grid-rows-[55px_1fr]">
            <FlexRow className="justify-end items-center">
                <Row>
                    <Button variant="contained" sx={{fontSize:"10px"}} onClick={resetHistory}>
                        Reset History
                    </Button>
                </Row>
            </FlexRow>

            <GridColoms
                className={`h-full w-full grid-rows-[40px_1fr] justify-items-center overflow-y-auto bg-[#57534e38] transition-all duration-500`}
            >
                {/* history title */}
                <GridColoms className="mx-auto w-full max-w-[1000px] grid-cols-3 justify-items-center border-b border-stone-500/30 pb-2 text-stone-500">
                    <Row className="m-2">history</Row>
                    <Row className="m-2">time</Row>
                    <Row className="m-2">Delete</Row>
                </GridColoms>

                {/* item map */}
                <GroupContainer>
                    {timerHistory &&
                        timerHistory.length > 0 &&
                        timerHistory
                            .reverse()
                            .map((item) => (
                                <TimerBox
                                    key={item.id}
                                    id={item.id}
                                    date={item.date}
                                    time={item.startTime}
                                />
                            ))}
                </GroupContainer>
            </GridColoms>
        </GridRow>
    );
}

export default TimerHistory;
