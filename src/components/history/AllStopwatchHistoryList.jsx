import { memo } from 'react';
import HistoryList from './HistoryList';
import GridColoms from '../ui/GridColoms';

function AllStopwatchHistoryList({ history, historyOpen }) {
    const historyEntries = Object.entries(history);




    return (
        <div
            className={`backface-hidden perspective-lg absolute left-0 top-0 z-10  h-full w-full bg-[#57534e38] transition-all duration-500`}
            style={{ transform: historyOpen ? 'rotateY(0)' : 'rotateY(-180deg)' }}
        >
            <div className="mx-auto h-full w-[90%] max-w-[1000px]  grid grid-rows-[40px_1fr]">
                <div className="mx-auto w-full grid  max-w-[1000px] grid-cols-[1fr_2fr_2fr] justify-items-center  border-stone-500/30 pb-2 text-stone-500">
                    <div>Lap</div>
                    <div>Lap times</div>
                    <div>Overall time</div>
                </div>

                <div className=' h-auto overflow-y-auto'>
                    {historyEntries &&
                        historyEntries.map((lapHistory) => (
                            <HistoryList key={lapHistory[0]} historyList={lapHistory} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default memo(AllStopwatchHistoryList);

// history = {  realTime1:[ {id:244,time:0394,...},{...},{..},{..} ] ; realTime2:[...]  ; realtime3:[..]  }
