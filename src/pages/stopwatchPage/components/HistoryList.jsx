// import components
import StopwatchBox from './StopwatchBox';
import Row from '../../../components/ui/Row';

function HistoryList({ historyList }) {
    const { date, laps } = historyList[1];

    return (
        <>
            <Row className="mb-2.5 overflow-y-hidden border-t border-stone-500/50 pt-3">{date}</Row>

            {laps &&
                laps?.map((item) => (
                    <StopwatchBox
                        className="mb-2"
                        key={item.id}
                        lap={item.lap}
                        lapTime={item.lapTime}
                        time={item.time}
                    />
                ))}
        </>
    );
}

export default HistoryList;
