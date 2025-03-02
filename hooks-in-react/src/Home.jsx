import React, { useRef } from 'react'

function Home() {
    const inputRef = useRef(null);
    console.log("Before DOM:", inputRef);

    const focusInput = () => {
        console.log("After DOM:", inputRef);
        inputRef.current.focus();
    }

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, [])

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus</button>
        </div>
    )
}

export default Home