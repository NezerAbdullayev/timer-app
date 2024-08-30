//  import components
import Button from '../components/buttons/Button';
import FlexRow from '../components/FlexRow';
import GridColoms from '../components/GridColoms';
// import TimerCorol from '../components/timerControl/TimerCorol';
import StopwatchsGroup from '../components/boxGroup/stopWatchGroup/StopWatchBoxGroup';
import StopwatchInput from '../components/stopwatchInput/StopwatchInput'
import Row from '../components/Row';
// fake data
import { StopWatchData } from '../fakeData/fakeDate';


function StopwatchPage() {
    return (
        <GridColoms className="grid-rows-[30%_55%_15%]">

            {/*  Stopwatch */}
            <Row className="w-full  grid place-items-center">
                <StopwatchInput />
            </Row>

            {/* history container */}
            <StopwatchsGroup items={StopWatchData} />

            {/* Stopwatch control buttons */}
            <FlexRow className="justify-evenly gap-5">
                <Button type="muiBlue">Reset</Button>

                <Button type="muiGray">Resume</Button>
            </FlexRow>


        </GridColoms>
    );
}

export default StopwatchPage;
