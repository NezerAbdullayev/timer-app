// react hooks
import { useState } from 'react';

// Hooks
import { useStopwatch } from '../../Hooks/useStopwatch';

//  import components
import GridColoms from '../../components/GridColoms';
import PageTitle from '../../components/PageTitle';
import StopwatchBoxGroup from './components/StopwatchBoxGroup';
import StopwatchInput from './components/StopwatchInput';
import TimeController from './components/TimeController';
import AllStopwatchHistoryList from './components/AllStopwatchHistoryList';
import HistoryButton from './components/HistoryButton';
import Row from '../../components/Row';

function StopwatchPage() {
    const [historyOpen, setHistoryOpen] = useState(false);

    // context hooks
    const {
        state: { lapHistory },
    } = useStopwatch();
    
    function toggleHistory() {
        setHistoryOpen((historyOpen) => !historyOpen);
    }

    return (
        <GridColoms className="grid-rows-[20%_10%_60%_10%]">
            {/*  header stopwatch start */}
            <PageTitle
                className="justify-center"
                headerTitle={<StopwatchInput type="time" />}
                headerDesc={lapHistory.length > 0 && <StopwatchInput type="lap" />}
            />
            {/*   header stopwatch end */}

            {/* history button  start*/}
            <HistoryButton historyOpen={historyOpen} onOpenHistory={toggleHistory} />
            {/* history button  end*/}

            {/* history */}
            <Row className="perspective-lg relative z-10 h-full w-full">
                <StopwatchBoxGroup historyOpen={historyOpen} />
                <AllStopwatchHistoryList historyOpen={historyOpen} />
            </Row>
            {/* history  end*/}

            {/* Stopwatch control buttons */}
            <TimeController />
        </GridColoms>
    );
}

export default StopwatchPage;
