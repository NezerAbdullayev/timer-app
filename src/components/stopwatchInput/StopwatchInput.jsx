function StopwatchInput({ stopWatch = '00:00:00:00' }) {
    return (
        <input
            type="text"
            disabled
            className="h-auto w-full bg-transparent p-4 text-center text-5xl tracking-[1px] "
            onChange={() => {
                return;
            }}
            value={stopWatch}
        />
    );
}

export default StopwatchInput;
