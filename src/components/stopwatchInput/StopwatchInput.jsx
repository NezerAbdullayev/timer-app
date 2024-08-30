function StopwatchInput({ value = '00:00:00:00', type }) {
    if (type == 'lap')
        return (
            <input
                type="text"
                disabled
                onChange={() => {
                    return;
                }}
                value={value}
                className="h-auto w-full bg-transparent m-4 text-center text-2xl tracking-[1px]"
            />
        );

    return (
        <input
            type="text"
            disabled
            className="h-auto w-full bg-transparent m-1 text-center text-5xl tracking-[1px]"
            onChange={() => {
                return;
            }}
            value={value}
        />
    );
}

export default StopwatchInput;


