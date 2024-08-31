
import { formatTime } from "../../functions/formatTime";

function StopwatchInput({ value, type }) {
    const formatValue=formatTime(value)


    if (type === 'lap') {
        return (
            <input
                type="text"
                disabled
                onChange={() => {}}
                value={formatValue}
                className="m-4 h-auto w-[15ch] bg-transparent text-center font-mono text-2xl tracking-[1px]"
            />
        );
    }

    return (
        <input
            type="text"
            disabled
            className="m-1 h-auto w-[15ch] bg-transparent text-center font-mono text-5xl tracking-[1px]"
            onChange={() => {}}
            value={formatValue}
        />
    );
}

export default StopwatchInput;
