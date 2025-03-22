import { useState, useEffect } from 'react'
import CompB from './CompB'

function CompA() {
    const [name, setName] = useState('');

    const handleChange = (name) => {
        setName(name);
    }

    useEffect(() => {
        console.log("CompA - useEffect");
        return () => {
            console.log("CompA - useEffect - cleanup");
        }
    }, []);

    return (
        <>
            <h2>Child to Parent</h2>
            <div>CompA - <span style={{ color: "red" }}>{name}</span></div>
            <CompB name="CSK" cb={handleChange} />
            <CompB name="RCB" cb={handleChange} />
            <CompB name="MI" cb={handleChange} />
            <CompB name="GT" cb={handleChange} />
            <CompB name="LSG" cb={handleChange} />
        </>
    )
}

export default CompA