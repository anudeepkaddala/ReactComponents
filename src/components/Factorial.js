import React, { useState, useMemo } from "react";

function Factorial() {
    const [number, setNumber] = useState(2);
    const [num, setNum] = useState(0);

    const factorial = useMemo( () => {
        let fact=1;
        for(let i=1;i<=number;i++){
            fact*=i;
        }
        return fact;
    },[number]);

    return (
        <>
            <p>Factorial of {number} is {factorial}</p>
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            <br />
            <button onClick={()=> setNum(prev => prev+1)}>Clicked here {num} times</button>
        </>
    );
}

export default Factorial;
