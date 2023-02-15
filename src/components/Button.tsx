import { useState } from 'react';

interface ButtonProps {
    btnText?: string;
    btnId: string;
};

export default function SquareButton(
    {btnId, btnText = ""}: ButtonProps
) {
    // TODO: set type
    const [value, setValue] = useState<string | null>(null);

    function handleClick() {
        console.log('pressed!');
        setValue('X');
    }

    return (
        <button
            className="Square-button"
            onClick={handleClick}
            id={btnId}
        >{value ? value : btnText}</button>
    );
}
