import { memo } from 'react';
import HistoryList from './HistoryList';
import GridColoms from '../GridColoms';

function AllStopwatchHistoryList({ history, historyOpen }) {
    const historyEntries = Object.entries(history);

    return (
        <GridColoms
            className={`backface-hidden absolute right-0 top-0 z-10 bg-red-500 ${historyOpen ? 'rotate-y-0' : 'rotate-y-180'}`}
        >
            {historyEntries &&
                historyEntries.map((lapHistory) => (
                    <HistoryList key={lapHistory[0]} historyList={lapHistory} />
                ))}
        </GridColoms>
    );
}

export default memo(AllStopwatchHistoryList);

// history = {  realTime1:[ {id:244,time:0394,...},{...},{..},{..} ] ; realTime2:[...]  ; realtime3:[..]  }
