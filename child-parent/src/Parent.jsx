import { useState } from 'react'
import Child from './Child';

function Parent() {
    const [messageFromChild, setMessageFromChild] = useState('');

    const handleChildMessage = (message) => {
        setMessageFromChild(message);
    }

    return (
        <div>
            <h2>Mom</h2>
            <p>Message from Child: {messageFromChild}</p>
            <Child sendMessageToMomNoteBook={handleChildMessage}></Child>
        </div>
    )
}

export default Parent