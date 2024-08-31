// import container
import GroupContainer from '../GroupContainer';
import StopwatchBox from './StopWatchBox';
import GridRow from '../../GridColoms';
import { useStopwatch } from '../../../Hooks/useStopwatch';

function StopWatchBoxGroup() {
    const { state: { history },} = useStopwatch();

    return (
        <GridRow className="grid-rows-[40px_1fr] justify-items-center">
            {/* history title */}
            <GridRow className="mx-auto  w-full max-w-[1000px] grid-cols-[1fr_2fr_2fr] justify-items-center border-b border-stone-500/30 pb-2 text-stone-500">
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

export default StopWatchBoxGroup;
