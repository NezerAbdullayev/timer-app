// react hooks
import { useState } from 'react';

// Hooks
import { useStopwatch } from '../../Hooks/useStopwatch';

//  import components
import GridColoms from '../../components/ui/GridColoms';
import PageTitle from '../../components/ui/PageTitle';
import StopwatchBoxGroup from "./components/StopwatchBoxGroup"
import StopwatchInput from './components/StopwatchInput';
import StopwatchControls from './components/StopwatchControls';
import AllStopwatchHistoryList from './components/AllStopwatchHistoryList';
import Row from '../../components/ui/Row';
import HistoryButton from './components/HistoryButton';

function StopwatchPage() {
    const [historyOpen, setHistoryOpen] = useState(false);

    // context hooks
    const {
        state: { lapHistory, history, isRunning, isReset },
        dispatch,
    } = useStopwatch();

    function toggleHistory() {
        setHistoryOpen((historyOpen) => !historyOpen);
    }

    // const handleClearHistory = () => dispatch({ type: 'CLEAR_HISTORY' });

    return (
        <GridColoms className="grid-rows-[20%_10%_55%_15%]">
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
                <StopwatchBoxGroup history={lapHistory} historyOpen={historyOpen} />
                <AllStopwatchHistoryList history={history} historyOpen={historyOpen} />
            </Row>
            {/* history  end*/}

            {/* Stopwatch control buttons */}
            <StopwatchControls isReset={isReset} isRunning={isRunning} dispatch={dispatch} />
        </GridColoms>
    );
}

export default StopwatchPage;
