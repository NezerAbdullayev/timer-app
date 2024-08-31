import { memo } from 'react';
import HistoryList from './HistoryList';

function AllStopwatchHistoryList({history}) {

    const historyEntries = Object.entries(history);

    return (
        <div>
            {historyEntries &&
                historyEntries.map((lapHistory) => (
                    <HistoryList key={lapHistory[0]} historyList={lapHistory} />
                ))}
        </div>
    );
}

export default memo(AllStopwatchHistoryList);

// history = {  realTime1:[ {id:244,time:0394,...},{...},{..},{..} ] ; realTime2:[...]  ; realtime3:[..]  }
