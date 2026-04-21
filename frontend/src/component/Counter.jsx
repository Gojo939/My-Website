import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
    document.title = `Clicked ${count} times`; //side effect
}, [count]); //dependency array


    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Add
            </button>

            <button onClick={() => setCount(count - 1)}>
                Miuns
            </button>
        </>
    )
}

export default Counter;