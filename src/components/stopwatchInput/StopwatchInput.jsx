import { formatTime } from '../../functions/formatTime';

function StopwatchInput({ value, type }) {
    const formatValue = formatTime(value);

    if (type === 'lap') {
        return (
            <input
                type="text"
                disabled
                onChange={() => {}}
                value={formatValue}
                className="mx-4  h-auto w-[15ch] bg-transparent text-center text-stone-400 font-mono text-base tracking-[1px] sm:text-2xl"
            />
        );
    }

    return (
        <input
            type="text"
            disabled
            className=" mt-1 h-auto w-[15ch] bg-transparent text-center font-mono text-3xl tracking-[1px] sm:text-5xl"
            onChange={() => {}}
            value={formatValue}
        />
    );
}

export default StopwatchInput;
