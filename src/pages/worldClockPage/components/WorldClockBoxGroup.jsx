import GroupContainer from "../../../components/boxGroup/GroupContainer";
import { timeZones } from "../../../data/worldClockData";
import WorldClockBox from "./WorldClockBox"



function WorldClockBoxGroup() {

    return (
        <GroupContainer>
            {/* items map */}
            {timeZones.length &&
                timeZones.map((item) => (
                    <WorldClockBox
                        key={item.id}
                        id={item.id}
                        cityName={item.name}
                        offset={item.offset} 
                    />
                ))}
        </GroupContainer>
    );
}

export default WorldClockBoxGroup;
