import BoxContainer from '../../BoxContainer';
import Row from '../../Row';
import Switch from '../Switch';

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
                <div>{history}</div>
                <div>
                    <Switch />
                </div>
            </Row>
        </BoxContainer>
    );
}

export default AlarmsBox;
