// context hooks
import { useAlarms } from '../../Hooks/useAlarms';

// import fake data
import { alarms } from '../../fakeData/fakeDate';

// import component
import GridColoms from '../../components/ui/GridColoms';
import PageTitle from '../../components/ui/PageTitle';
import Toolbar from '../../components/ui/Toolbar';
import AlarmsBoxGroup from './components/AlarmsBoxGroup';

// utils
import { getRealTime } from '../../utils/getCurrentDateTime';

function AlarmsPage() {
    // console.log(getRealTime());

    console.log(useAlarms());

    const {state:{alarmsList,realTime},dispatch}=useAlarms()

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
                headerTitle="alarm in 10 hours 51 minutes"
                headerDesc="the 29 Aug, 07:50"
            />

            <Toolbar />

            <AlarmsBoxGroup items={alarms} />
        </GridColoms>
    );
}

export default AlarmsPage;
