import React, { useEffect, useState } from 'react'

function Cctv() {

    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <div>
            <h2>Time Spent in store: {time} seconds</h2>
        </div>
    )
}

export default Cctv