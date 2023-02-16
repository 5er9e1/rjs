import React from 'react';

import SquareButton from './Button';

interface BoardSize {
    readonly size?: number;
}

export default function Board(
    {size = 3}: BoardSize
) {
    const buttons: Array<React.ReactNode> = [];
    const buttonTexts: Array<number> = [];
    
    for (let i = 1; i <= size; i++) {
        buttonTexts.push(i)
    }

    for (let j = 0; j < size; j++) {
        buttons.push(
            (<div className="Board-row" key={'row_' + j.toString()}>
                {buttonTexts.map((item)=>{
                    return <SquareButton
                        key={'btn_' + j.toString() + '_' + item.toString()}
                        btnId={'btn_' + j.toString() + '_' + item.toString()}
                        btnText={(item + (size * j)).toString()}
                    />;
                })}
            </div>)
        )        
    }

    return (
        <>
            {
                buttons.map(
                    (item)=>{
                        return item;
                    }
                )
            }
        </>
    );
}