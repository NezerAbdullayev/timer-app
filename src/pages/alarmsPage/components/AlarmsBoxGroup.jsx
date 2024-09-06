// import components
import AlarmsBox from './AlarmsBox';
import GroupContainer from '../../../components/boxGroup/GroupContainer';
import { memo } from 'react';
import { useAlarms } from '../../../Hooks/useAlarms';

function AlarmsBoxGroup({ OpenDelete }) {

    const {state:{alarmsList}}=useAlarms()
    
    return (
        <GroupContainer>
            {/* items map */}
            {alarmsList.length > 0 ? (
                alarmsList.map((item) => (
                    <AlarmsBox
                        key={item.id }
                        id={item.id}
                        hour={item.hour}
                        isActive={item.isActive}
                        history={item.history}
                        OpenDelete={OpenDelete}
                    />
                ))
            ) : (
                <p>No alarms available</p>
            )}
        </GroupContainer>
    );
}

export default memo(AlarmsBoxGroup);
