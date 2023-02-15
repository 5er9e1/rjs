import SquareButton from './Button';
import React from 'react';

interface BoardSize {
    size?: number;
};

export default function Board(
    {size = 3}: BoardSize
) {
    const buttons: Array<React.ReactNode> = [];
    const buttons_texts: Array<number> = [];
    let i: number = 1;
    while (i <= size) {
        buttons_texts.push(i)
        i++
    }
    i = 0;
    
    while (i < size) {
        buttons.push(
            (<div className="Board-row" key={'row_' + i.toString()}>
                {buttons_texts.map((item)=>{
                    return <SquareButton
                        key={"btn_" + i.toString() + "_" + item.toString()}
                        btnId={"btn_" + i.toString() + "_" + item.toString()}
                        btnText={(item + (size * i)).toString()}
                    />;
                })}
            </div>)
        )        
        i++
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