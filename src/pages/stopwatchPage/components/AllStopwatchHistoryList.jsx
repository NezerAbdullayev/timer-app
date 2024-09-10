import { memo } from 'react';
import HistoryList from './HistoryList';
import { useStopwatch } from '../../../Hooks/useStopwatch';
import { Button } from '@mui/material';

function AllStopwatchHistoryList({ historyOpen }) {
    const {
        state: { history },
        dispatch,
    } = useStopwatch();

    const clearHistory = () => {
        dispatch({ type: 'CLEAR_HISTORY' });
    };

    const historyEntries = Object.entries(history);

    return (
        <div
            className={`backface-hidden perspective-lg absolute left-0 top-0 z-10 h-full w-full bg-[#57534e38] transition-all duration-500`}
            style={{ transform: historyOpen ? 'rotateY(0)' : 'rotateY(-180deg)' }}
        >
            <div className="mx-auto grid h-full w-[90%] max-w-[1000px] grid-rows-[40px_40px_1fr]">
                <div className="flex items-center justify-end">
                    <Button
                        onClick={clearHistory}
                        sx={{ height: '35px', backgroundColor: '#700a0a', color: 'white' }}
                    >
                        CLEAR HISTORY
                    </Button>
                </div>

                <div className="mx-auto grid w-full max-w-[1000px] grid-cols-[1fr_2fr_2fr] justify-items-center border-stone-500/30 pb-2 text-stone-500">
                    <div>Lap</div>
                    <div>Lap times</div>
                    <div>Overall time</div>
                </div>

                <div className="h-auto overflow-y-auto px-2.5">
                    {historyEntries &&
                        historyEntries.map((lapHistory) => (
                            <HistoryList key={lapHistory[0]} historyList={lapHistory} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default AllStopwatchHistoryList;

// test->  history = {  realTime1:[ {id:244,time:0394,...},{...},{..},{..} ] ; realTime2:[...]  ; realtime3:[..]  }
