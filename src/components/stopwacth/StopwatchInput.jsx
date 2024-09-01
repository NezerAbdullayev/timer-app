import { formatTime } from '../../functions/formatTime';
import { useStopwatch } from '../../Hooks/useStopwatch';

function StopwatchInput({ type }) {
    // context
    const {
        state: { time, lapTime },
    } = useStopwatch();

    if (type === 'lap') {
        let changeLapTime = formatTime(lapTime);
        return (
            <input
                type="text"
                disabled
                onChange={() => {
                    return;
                }}
                value={changeLapTime}
                className="mx-4 h-auto w-[15ch] bg-transparent text-center font-mono text-base tracking-[1px] text-stone-400 sm:text-2xl"
            />
        );
    }

    if (type === 'time') {
        let changeTime = formatTime(time);

        return (
            <input
                type="text"
                disabled
                className="mt-1 h-auto w-[15ch] bg-transparent text-center font-mono text-3xl tracking-[1px] sm:text-5xl"
                onChange={() => {
                    return;
                }}
                value={changeTime}
            />
        );
    }
}

export default StopwatchInput;
