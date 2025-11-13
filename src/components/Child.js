import { useState } from "react";
function Child({number}){
    const [num, doubleNumber] = useState(number);
    return (
        <>
        <p>Number is : {num}</p>
        <button onClick={() => doubleNumber(prev => prev*2)}>Double your number here</button>
        </>
    );
}

export default Child;
