function TimerInput({ max, min, value, onChangeInput, name,disbaled }) {
    return (
        <input
            type="number"
            disabled={disbaled}
            name={name}
            value={value}
            onChange={onChangeInput}
            min={min}
            max={max}
            className="input-no-spinner w-[70px] bg-transparent p-1 font-mono text-5xl text-stone-50 focus:outline-none"
        />
    );
}

export default TimerInput;
