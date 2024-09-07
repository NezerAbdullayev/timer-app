// import component
import { useAlarms } from '../../../Hooks/useAlarms';
import BoxContainer from '../../../components/boxGroup/BoxContainer';
import FlexRow from '../../../components/FlexRow';
import Row from '../../../components/Row';
import GridRow from '../../../components/GridRow';
// import mui component
import Switch from '../../../components/boxGroup/Switch';

function AlarmsBox({ id, hour: { hh, mm }, isActive, history, openDelete, }) {
    const { dispatch } = useAlarms();

    function deleteAlarm(deleteID) {
        dispatch({ type: 'DELETE_ALARM', payload: deleteID });
    }

    function handleAlarmActiveBtn(id) {
        dispatch({ type: 'TOGGLE_ISACTIVE_ALARM', payload: id });
    }

    return (
        <BoxContainer>
            {/* delete button */}
            <GridRow className={`grid place-items-center ${openDelete ? 'grid' : 'hidden'}`}>
                <button
                    onClick={() => deleteAlarm(id)}
                    className="flex-0 h-10 w-10 cursor-pointer rounded-full bg-[#a2a6ac] text-stone-100 transition-all hover:bg-[#82868c]"
                >
                    &#10006;
                </button>
            </GridRow>

            {/* box  start */}
            <FlexRow className="flex-1 items-center justify-between">
                {/* hour */}
                <Row
                    className={`text-2xl transition-all sm:text-3xl ${isActive ? 'text-lightMain' : 'text-stone-400'}`}
                >
                    <span>{hh}</span>
                    <span>:</span>
                    <span>{mm}</span>
                </Row>

                {/* history and active button */}
                <Row
                    className={`flex items-center gap-3 text-sm transition-all ${isActive ? 'text-lightMain' : 'text-stone-400'}`}
                >
                    <Row>{history}</Row>
                    <Row>
                        <Switch onClick={() => handleAlarmActiveBtn(id)} isActive={isActive} />
                    </Row>
                </Row>
            </FlexRow>
            {/* box end */}
        </BoxContainer>
    );
}

export default AlarmsBox;
