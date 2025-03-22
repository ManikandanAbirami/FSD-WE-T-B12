import { useEffect } from "react";

function CompB({ name, cb }) {
    const handleClick = () => {
        cb(name);
    }

    useEffect(() => {
        console.log("CompB - useEffect");
        return () => {
            console.log("CompB - useEffect - cleanup");
        }
    }, []);

    return (
        <>
            <div>CompB - {name}</div>
            <button onClick={handleClick}>Click Me!!</button>
        </>
    );
}

export default CompB;
