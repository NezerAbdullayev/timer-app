import { useState } from 'react';
// context hooks
import { useAlarms } from '../../Hooks/useAlarms';

// import fake data
import { alarms } from '../../fakeData/fakeDate';

// import component
import GridColoms from '../../components/ui/GridColoms';
import PageTitle from '../../components/ui/PageTitle';
import Toolbar from '../../components/ui/Toolbar';
import AlarmsBoxGroup from './components/AlarmsBoxGroup';
import Popup from '../../components/ui/Popup';
import AddAlarmPopup from './components/AddAlarmPopup';


function AlarmsPage() {

    const [openNewAlarm, setOpenNewAlarm] = useState(false);


    const {
        state: { alarmsList, realTime },
        dispatch,
    } = useAlarms();

    console.log(alarmsList,"realtime",realTime)

    function handleToggleAlarmBtn() {
        setOpenNewAlarm((openNewAlarm) => !openNewAlarm);
    }

    function addAlarm({ hour, history, music }) {
        dispatch({ type: 'ADD_ALARM', payload: { hour, history, music } });
    }

    function deleteAlarm(deleteID) {
        dispatch({ type: 'DELETE_ALARM', payload: { deleteID } });
    }

    function clearAlarms() {
        dispatch({ type: 'CLEAR_ALLALARMS' });
    }

    function editAlarms(editId, editHour, editHistory, editMusic, editIsActive) {
        const editAlarms = {
            id: editId,
            hour: editHour,
            history: editHistory,
            music: editMusic,
            isActive: editIsActive,
        };
        dispatch({ type: 'EDIT_ALARMS', payload: { editAlarms } });
    }

    function toggleIsactiveAlarm(id) {
        dispatch({ type: 'TOGGLE_ISACTIVE_ALARM', payload: id });
    }
    
    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <PageTitle
                className="justify-end"
                headerTitle="ALARM"
                headerDesc="the 29 Aug, 07:50"
            />

            <Toolbar onToggleAlarmPopup={handleToggleAlarmBtn} />

            <AlarmsBoxGroup items={alarmsList}  />

            <Popup onToggleAlarmPopup={handleToggleAlarmBtn} openNewAlarm={openNewAlarm} >
                <AddAlarmPopup onToggleAlarmPopup={handleToggleAlarmBtn} dispatch={dispatch} />
            </Popup>
            

        </GridColoms>
    );
}

export default AlarmsPage;
