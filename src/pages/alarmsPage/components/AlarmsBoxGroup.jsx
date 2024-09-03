// import components
import AlarmsBox from "./AlarmsBox"
import GroupContainer from "../../../components/ui/boxGroup/GroupContainer"

function AlarmsBoxGroup({ items }) {
    return (
        <GroupContainer>
            {/* items map */}
            {items.length &&
                items.map((item) => (
                    <AlarmsBox
                        key={item.id}
                        id={item.id}
                        hour={item.hour}
                        isActive={item.isActive}
                        history={item.history}
                    />
                ))}
        </GroupContainer>
    );
}

export default AlarmsBoxGroup;
