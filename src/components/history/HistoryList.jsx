// import components 
import StopwatchBox from "../../pages/stopwatchPage/components/StopwatchBox";
import Row from "../ui/Row";

function HistoryList({ historyList }) {
    const {date,laps}=historyList[1]

    return (
        <>
            <Row className="pt-3  mb-2.5 border-t border-stone-500/50 overflow-y-hidden">{date}</Row>

            { laps && laps?.map((item) => (
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
