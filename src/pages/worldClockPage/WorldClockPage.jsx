// import  components
import GridColoms from '../../components/GridColoms';
import Toolbar from '../../components/Toolbar';
import WorldClockBoxGroup from './components/WorldClockBoxGroup';
import TimerTitle from '../timerPage/components/TimerTitle';
import { useState } from 'react';
import AddNewWorldClockPopup from "./components/AddNewWorldClockPopup"

function WorldClockPage() {
    const [openNewClockBtn, setOpenNewClockBtn] = useState(false);
    const [openDeleteBtn, setOpenDeleteBtn] = useState(false);

    function handleToggleOpenDeleteBtn() {
        setOpenDeleteBtn((OpenDeleteBtn) => !OpenDeleteBtn);
    }

    function handleToggleOpenNewClockBtn() {
        setOpenNewClockBtn((openNewClockBtn) => !openNewClockBtn);
    }

    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <TimerTitle />

            <Toolbar
                openDelete={openDeleteBtn}
                onDeleteButton={handleToggleOpenDeleteBtn}
                onTogglePopupOpen={handleToggleOpenNewClockBtn}
            />

            <WorldClockBoxGroup openDelete={openDeleteBtn} />

            <AddNewWorldClockPopup
                openNewClockBtn={openNewClockBtn}
                onTogglePopupOpen={handleToggleOpenNewClockBtn}
            />
            
        </GridColoms>
    );
}

export default WorldClockPage;
