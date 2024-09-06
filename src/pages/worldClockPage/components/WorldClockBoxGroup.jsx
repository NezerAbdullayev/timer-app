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
                        cityName={item.name}
                        offset={item.offset} 
                    />
                ))}
        </GroupContainer>
    );
}

export default WorldClockBoxGroup;
