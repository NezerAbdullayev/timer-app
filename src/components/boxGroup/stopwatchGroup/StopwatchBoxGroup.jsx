// import container
import GroupContainer from '../GroupContainer';
import StopwatchBox from './StopWatchBox';
import GridRow from '../../GridColoms';
import { memo } from 'react';

function StopWatchBoxGroup({ history, historyOpen }) {
    return (
        <GridRow
            className={`backface-hidden absolute right-0 top-0 z-10 h-full w-full grid-rows-[40px_1fr] justify-items-center bg-blue-400 ${historyOpen ? 'rotate-y-180' : 'rotate-y-0'}`}
        >
            {/* history title */}
            <GridRow className="mx-auto w-full max-w-[1000px] grid-cols-[1fr_2fr_2fr] justify-items-center border-b border-stone-500/30 pb-2 text-stone-500">
                <div>Lap</div>
                <div>Lap times</div>
                <div>Overall time</div>
            </GridRow>

            <GroupContainer>
                {history.length > 0 &&
                    (history || []).map((item) => (
                        <StopwatchBox
                            key={item.id}
                            lap={item.lap}
                            lapTime={item.lapTime}
                            time={item.time}
                        />
                    ))}
            </GroupContainer>
        </GridRow>
    );
}

export default memo(StopWatchBoxGroup);
