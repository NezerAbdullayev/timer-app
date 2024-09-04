
function TimerInput({ max, min, value, onChangeInput }) {
    // Handle input sanitization and value change
    const handleKeyDown = (event) => {
        if (['e', '+', '-'].includes(event.key)) {
            event.preventDefault();
        }
    };

    const handleInput = (event) => {
        const sanitizedValue = event.target.value.replace(/[^0-9]/g, '');
        if (sanitizedValue !== '' && !isNaN(sanitizedValue)) {
            onChangeInput(sanitizedValue);
        }
    };

    return (
        <input
            type="number"
            value={value}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            min={min}
            max={max}
            className="h-[40px] w-[50px] p-1 text-stone-950 focus:outline-none"
        />
    );
}

export default TimerInput;