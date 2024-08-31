//  import components
import GridColoms from '../components/GridColoms';
import PageTitle from '../components/PageTitle';
import StopwatchBoxGroup from '../components/boxGroup/stopWatchGroup/StopWatchBoxGroup';
import StopwatchInput from '../components/stopwatchInput/StopwatchInput';
import StopwatchControls from "../components/StopwatchControls"
import AllStopwatchHistoryList from "../components/history/History"

// Hooks
import { useStopwatch } from '../Hooks/useStopwatch';

import {  useState } from 'react';

function StopwatchPage() {
    
    const [historOpen, setHistoryOpen] = useState(false);

    const {state: {lapHistory,history,isRunning,isReset },dispatch } = useStopwatch();


    function openHistory(){
        setHistoryOpen(true)
    }
    function closeHistory(){
        setHistoryOpen(false)
    }


    console.log(history)


    // const handleClearHistory = () => dispatch({ type: 'CLEAR_HISTORY' });

    return (
        <GridColoms className="grid-rows-[30%_55%_15%]">
            
            {/*  header stopwatch start */}
            <PageTitle
                className="justify-center"
                headerTitle={<StopwatchInput  type="time" />}
                headerDesc={lapHistory.length > 0 && (<StopwatchInput type="lap" />)}
            />
            {/*   header stopwatch end */}

            <div>
                {/* history container */}
                <StopwatchBoxGroup history={lapHistory} />
                {/* <AllStopwatchHistoryList history={history} />    */}
            </div>

            {/* Stopwatch control buttons */}
            <StopwatchControls isReset={isReset} isRunning={isRunning} dispatch={dispatch} />

        </GridColoms>
    );
}

export default StopwatchPage;
