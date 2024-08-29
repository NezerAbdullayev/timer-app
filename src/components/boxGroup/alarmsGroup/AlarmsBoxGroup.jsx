// import components
import AlarmsBox from './AlarmsBox';
import GroupContainer from '../GroupContainer';

function AlarmsBoxGroup({ items }) {
    return (
        <GroupContainer>
            {/* items map */}
            {items.length &&
                items.map((item) => (
                    <AlarmsBox
                        key={item.id}
                        id={item.id}
                        date={item.date}
                        hour={item.hour}
                        isActive={item.isActive}
                        history={item.history}
                    />
                ))}
        </GroupContainer>
    );
}

export default AlarmsBoxGroup;
