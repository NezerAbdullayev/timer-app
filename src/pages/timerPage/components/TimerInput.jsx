import { useState } from 'react';

function TimerInput({ max, min,value, onChangeInput }) {
    const [input, setInput] = useState(0);

    const handleKeyDown = (event) => {
        if (['e', '+', '-'].includes(event.key)) {
            event.preventDefault();
        }
    };

    const handleInput = (event) => {
        const sanitizedValue = event.target.value.replace(/[^0-9]/g, '');
        setInput(sanitizedValue);

        // Yuxarı komponentə dəyəri ötürmək
        if (onChangeInput) {
            onChangeInput(sanitizedValue);
        }
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <input
            type="number"
            value={value}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            onChange={handleChange}
            className="h-[40px] w-[50px] p-1 text-stone-950  focus:outline-none"
            min={min}
            max={max}
        />
    );
}

export default TimerInput;
