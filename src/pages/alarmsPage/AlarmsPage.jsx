import { useState } from 'react';
// context hooks
import { useAlarms } from '../../Hooks/useAlarms';

// import component
import GridColoms from '../../components/ui/GridColoms';
import PageTitle from '../../components/ui/PageTitle';
import Toolbar from '../../components/ui/Toolbar';
import AlarmsBoxGroup from './components/AlarmsBoxGroup';
import Popup from '../../components/ui/Popup';
import AddAlarmPopup from './components/AddAlarmPopup';

function AlarmsPage() {
    const [openNewAlarm, setOpenNewAlarm] = useState(false);
    const [OpenDelete, setOpenDelete] = useState(false);

    const {
        state: { alarmsList },
        dispatch,
    } = useAlarms();



    function handleToggleDeleteBtn() {
        setOpenDelete((OpenDelete) => !OpenDelete);
    }

    function handleToggleAlarmBtn() {
        setOpenNewAlarm((openNewAlarm) => !openNewAlarm);
    }

    function deleteAlarm(deleteID) {
        dispatch({ type: 'DELETE_ALARM', payload:  deleteID  });
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

    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <PageTitle
                className="justify-end font-mono"
                headerTitle="Alarm Page"
                headerDesc="the 29 Aug, 07:50"
            />

            <Toolbar
                onToggleAlarmPopup={handleToggleAlarmBtn}
                onDeleteButton={handleToggleDeleteBtn}
                openNewAlarm={openNewAlarm}
                OpenDelete={OpenDelete}
            />

            <AlarmsBoxGroup
                items={alarmsList}
                OpenDelete={OpenDelete}
                onDelete={deleteAlarm}
            />

            <Popup onToggleAlarmPopup={handleToggleAlarmBtn} openNewAlarm={openNewAlarm}>
                <AddAlarmPopup onToggleAlarmPopup={handleToggleAlarmBtn} dispatch={dispatch} />
            </Popup>
        </GridColoms>
    );
}

export default AlarmsPage;
