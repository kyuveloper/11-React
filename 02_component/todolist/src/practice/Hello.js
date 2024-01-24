import React from 'react';

function Hello({name, year, isSpecial}) {

    const style = isSpecial ? <b>***</b> : null
    
    return (
        <>
            <div>
                {style} 클럽: {name}, 창단연도: {year}
            </div>
        </>
    )
}

export default Hello