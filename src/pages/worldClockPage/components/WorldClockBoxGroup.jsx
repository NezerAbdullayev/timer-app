import GroupContainer from "../../../components/boxGroup/GroupContainer";
import WorldClockBox from "./WorldClockBox"


function WorldClockBoxGroup({ items }) {
    return (
        <GroupContainer>
            {/* items map */}
            {items.length &&
                items.map((item) => (
                    <WorldClockBox
                        key={item.id}
                        id={item.id}
                        cityName={item.cityName}
                        comparison={item.comparison}
                        clockTime={item.clockTime}
                        offset={item.offset} 
                    />
                ))}
        </GroupContainer>
    );
}

export default WorldClockBoxGroup;
