// import hooks 
import { memo } from 'react';

// import component
import StopwatchBox from './StopWatchBox';
import GridColoms from '../../../components/ui/GridColoms';
import GroupContainer from '../../../components/ui/boxGroup/GroupContainer';

function StopWatchBoxGroup({ history, historyOpen }) {
    return (
        <div
            className={`perspective-lg backface-hidden absolute left-0 top-0 z-10 grid h-full w-full grid-rows-[40px_1fr] justify-items-center transition-all duration-500 bg-[#57534e38]`}
            style={{ transform: historyOpen ? 'rotateY(180deg)' : 'rotateY(0)' }}
        >
            {/* history title */}
            <GridColoms className="mx-auto w-full max-w-[1000px] grid-cols-[1fr_2fr_2fr] justify-items-center border-b border-stone-500/30 pb-2 text-stone-500">
                <div>Lap</div>
                <div>Lap times</div>
                <div>Overall time</div>
            </GridColoms>

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
        </div>
    );
}

export default memo(StopWatchBoxGroup);
