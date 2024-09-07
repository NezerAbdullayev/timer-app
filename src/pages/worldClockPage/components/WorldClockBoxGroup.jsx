// components
import GroupContainer from "../../../components/boxGroup/GroupContainer";
import WorldClockBox from "./WorldClockBox"
import { useWorldClock } from "../../../Hooks/useWorldClock";


function WorldClockBoxGroup({openDelete}) {
    
    const {state:{worldClock}}=useWorldClock()

    return (
        <GroupContainer>
            {/* items map */}
            {worldClock && worldClock.length>0 &&
                worldClock.map((item) => (
                    <WorldClockBox
                        key={item.id}
                        id={item.id}
                        cityName={item.name}
                        offset={item.offset} 
                        openDelete={openDelete}
                    />
                ))}
        </GroupContainer>
    );
}

export default WorldClockBoxGroup;
