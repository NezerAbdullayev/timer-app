import BoxContainer from '../../BoxContainer';
import Row from '../../Row';

function WorldClockBox({ id, cityName, comparison, clockTime }) {
    return (
        // box container bu olacaqdir
        <BoxContainer>
            {/* city */}
            <div className=" flex flex-col gap-[2px]">
                <div className=''>{cityName}</div>
                <div className='text-xs sm:text-sm'>{comparison}</div>
            </div>

            {/* history and active button */}
            <Row className="text-2xl transition-all sm:text-3xl text-lightMain">
                {clockTime}
            </Row>
        </BoxContainer>
    );
}

export default WorldClockBox;
