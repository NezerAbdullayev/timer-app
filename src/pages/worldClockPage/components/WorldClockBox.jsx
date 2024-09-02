import BoxContainer from '../../../components/ui/BoxContainer';
import Row from '../../../components/ui/Row';

function WorldClockBox({ id, cityName, comparison, clockTime }) {
    return (
        // box container bu olacaqdir
        <BoxContainer>
            {/* city */}
            <div className="flex flex-col gap-[2px]">
                <div className="">{cityName}</div>
                <div className="text-xs sm:text-sm">{comparison}</div>
            </div>

            {/* history and active button */}
            <Row className="text-2xl text-lightMain transition-all sm:text-3xl">{clockTime}</Row>
        </BoxContainer>
    );
}

export default WorldClockBox;
