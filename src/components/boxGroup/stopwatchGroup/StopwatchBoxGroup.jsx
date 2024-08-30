// import container
import GroupContainer from '../GroupContainer';
import StopwatchBox from './StopWatchBox';
import GridRow from '../../GridColoms';

function StopWatchBoxGroup({ items = [] }) {
    return (
        <GridRow className=" grid-cils-[10%_90%] justify-items-center">

            {/* history title */}
            <GridRow className="mx-auto  w-full max-w-[1000px] h-10 grid-cols-[1fr_2fr_2fr] justify-items-center border-b border-stone-500/30 pb-2 text-stone-500 ">

                <div>Lap</div>
                <div>Lap times</div>
                <div>Overall time</div>
            </GridRow>


            <GroupContainer>

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

        </GridRow>
    );
}

export default StopWatchBoxGroup;
