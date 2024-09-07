import { useState } from 'react';

// import component
import GridColoms from '../../components/GridColoms';
import PageTitle from '../../components/PageTitle';
import Toolbar from '../../components/Toolbar';
import AlarmsBoxGroup from './components/AlarmsBoxGroup';
import Popup from '../../components/Popup';
import AddAlarmPopup from './components/AddAlarmPopup';

function AlarmsPage() {
    const [openNewAlarm, setOpenNewAlarm] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);


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
                onTogglePopupOpen={handleToggleOpenAlarmBtn}
                onDeleteButton={handleToggleOpenDeleteBtn}
                openDelete={openDelete}
            />

            <AlarmsBoxGroup openDelete={openDelete}  />

            <Popup onTogglePopupOpen={handleToggleOpenAlarmBtn} openNewItermBtn={openNewAlarm}>
                <AddAlarmPopup onToggleAlarmPopup={handleToggleOpenAlarmBtn}  />
            </Popup>
        </GridColoms>
    );
}

export default AlarmsPage;
