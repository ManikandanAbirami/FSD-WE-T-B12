// import { useState } from 'react'

function Child({ sendMessageToMomNoteBook }) {
    // const [message, setMessage] = useState('');
    const handleClick = () => {
        // sendMessageToMomNoteBook(message);
        sendMessageToMomNoteBook("Hello Mom");
    }
    return (
        <div>
            <h3>Child</h3>
            {/* <input type="text" placeholder="Enter Message" onChange={(e) => setMessage(e.target.value)} /> */}
            <button onClick={handleClick}>Send Message</button>
        </div>
    )
}

export default Child