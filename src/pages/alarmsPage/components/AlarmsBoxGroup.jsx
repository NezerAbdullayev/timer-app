// import components
import AlarmsBox from './AlarmsBox';
import GroupContainer from '../../../components/ui/boxGroup/GroupContainer';
import { memo } from 'react';

function AlarmsBoxGroup({ items, OpenDelete, onDelete }) {
    console.log(items);
    return (
        <GroupContainer>
            {/* items map */}
            {items.length > 0 ? (
                items.map((item) => (
                    <AlarmsBox
                        key={item.id || Math.random()}
                        id={item.id}
                        hour={item.hour}
                        isActive={item.isActive}
                        history={item.history}
                        OpenDelete={OpenDelete}
                        onDelete={onDelete}
                    />
                ))
            ) : (
                <p>No alarms available</p>
            )}
        </GroupContainer>
    );
}

export default memo(AlarmsBoxGroup);
