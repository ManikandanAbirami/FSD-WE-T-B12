import { useState, useMemo, useCallback } from 'react'
import Button from './Button'

function Memo() {
    const [num, setNum] = useState(10);
    const [logValue, setLogValue] = useState('');
    const fibonacciValue = useMemo(() => fibonacci(num), [num]);

    const onClickLog = useCallback(() => {
        console.log(logValue);
    }, [logValue]);
    return (
        <div>
            <h1>Fibonacci {num} is {fibonacciValue}</h1>
            <input type="number"
                value={num}
                onChange={(e) => setNum(parseInt(e.target.value))} />
            <br />
            <br />

            <input type="text"
                value={logValue}
                onChange={(e) => setLogValue(e.target.value)}
            />

            <Button onClick={onClickLog}>
                Log Value</Button>
        </div>
    )
}

function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
export default Memo