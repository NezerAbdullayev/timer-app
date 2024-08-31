import StopwatchBox from '../boxGroup/stopWatchGroup/StopWatchBox';

function HistoryList({ historyList }) {
    return (
        <div>
            <div>{historyList[0]}</div>

            {historyList[1]?.map((item) => (
                <StopwatchBox
                    key={item.id}
                    lap={item.lap}
                    lapTime={item.lapTime}
                    time={item.time}
                />
            ))}
        </div>
    );
}

export default HistoryList;
