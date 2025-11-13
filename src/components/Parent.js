import Child from "./Child";

function Parent(){
    const number = 5;
    return (
        <>
            <Child number={number} />
        </>
    )
}

export default Parent;