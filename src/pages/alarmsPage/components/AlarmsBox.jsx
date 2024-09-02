// import component
import BoxContainer from '../../../components/ui/BoxContainer';
import Row from '../../../components/ui/Row';
// import mui component
import Switch from '../../../components/ui/boxGroup/Switch';

function AlarmsBox({ id, hour: { hh, mm }, isActive, history }) {
    return (
        // box container bu olacaqdir
        <BoxContainer>
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
                    <Switch />
                </Row>
            </Row>
        </BoxContainer>
    );
}

export default AlarmsBox;
