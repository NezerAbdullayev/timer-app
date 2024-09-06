import { useState } from 'react';
// context hooks
import { useAlarms } from '../../Hooks/useAlarms';

// import component
import GridColoms from '../../components/GridColoms';
import PageTitle from '../../components/PageTitle';
import Toolbar from '../../components/Toolbar';
import AlarmsBoxGroup from './components/AlarmsBoxGroup';
import Popup from '../../components/Popup';
import AddAlarmPopup from './components/AddAlarmPopup';

function AlarmsPage() {
    const [openNewAlarm, setOpenNewAlarm] = useState(false);
    const [OpenDelete, setOpenDelete] = useState(false);


    function handleToggleOpenDeleteBtn() {
        setOpenDelete((OpenDelete) => !OpenDelete);
    }

    function handleToggleOpenAlarmBtn() {
        setOpenNewAlarm((openNewAlarm) => !openNewAlarm);
    }

    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <PageTitle className="justify-end font-mono" headerTitle="Alarm Page" />

            <Toolbar
                onToggleAlarmPopup={handleToggleOpenAlarmBtn}
                onDeleteButton={handleToggleOpenDeleteBtn}
                OpenDelete={OpenDelete}
            />

            <AlarmsBoxGroup OpenDelete={OpenDelete}  />

            <Popup onToggleAlarmPopup={handleToggleOpenAlarmBtn} openNewAlarm={openNewAlarm}>
                <AddAlarmPopup onToggleAlarmPopup={handleToggleOpenAlarmBtn}  />
            </Popup>
        </GridColoms>
    );
}

export default AlarmsPage;
