import { useState } from 'react';

interface ButtonProps {
    readonly btnText?: string;
    readonly btnId: string;
}

export default function SquareButton(
    {btnId, btnText = ''}: ButtonProps
) {
    // TODO: set type
    const [value, setValue] = useState<string | null>(null);

    function handleClick() {
        console.log('pressed!');  // eslint-disable-line no-console
        setValue('X');
    }

    return (
        <button
            className="Square-button"
            onClick={handleClick}
            id={btnId}
        >{value !== null ? value : btnText}</button>
    );
}
