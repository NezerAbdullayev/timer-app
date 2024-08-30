// import container
import GroupContainer from '../GroupContainer';
import StopwatchBox from './StopWatchBox';
import GridRow from '../../GridColoms';

function StopWatchBoxGroup({ items = [] }) {
    return (
        <GroupContainer>

            {/* history title */}
            <GridRow className="mx-auto h-10 w-[1000px] max-w-[90%] grid-cols-[1fr_2fr__2fr] justify-items-center border-b border-stone-500/30 pb-2 text-stone-500">
                <div>Lap</div>
                <div>Lap times</div>
                <div>Overall time</div>
            </GridRow>

            {items.length &&
                items.map((item) => (
                    <StopwatchBox
                        key={item.id}
                        id={item.id}
                        lap={item.lap}
                        lapTimes={item.lapTimes}
                        overallTime={item.overallTime}
                    />
                ))}
        </GroupContainer>
    );
}

export default StopWatchBoxGroup;
