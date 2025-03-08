import { Link } from 'react-router-dom';

const candies = [
    { id: 1, name: 'Chocolate 🍫', color: 'Brown' },
    { id: 2, name: 'Lollipop 🍭', color: 'Red' },
    { id: 3, name: 'Gummy Bear 🍡', color: 'Green' },
    { id: 4, name: 'Jelly Bean 🪼', color: 'Yellow' },
    { id: 5, name: 'Marshmallow 🍫', color: 'Pink' },
    { id: 6, name: 'Chewing Gum 🍬', color: 'Blue' },
    { id: 7, name: 'Gummi Worm 🍭', color: 'Purple' },
    { id: 8, name: 'Fruit Chew  🍭', color: 'Orange' },
    { id: 9, name: 'Jelly Candy 🍭', color: 'Black' },
    { id: 10, name: 'Caramel 🍭', color: 'Brown' },
    { id: 11, name: 'Gummy Worms 🍭', color: 'Green' },
    { id: 12, name: 'Fruit Snacks 🍭', color: 'Red' }
]

function Candies() {
    return (
        <div style={{ backgroundColor: "#FFDA89", padding: "20px", minHeight: "100vh" }}>
            <h1>🍬 Candies List</h1>
            {candies.map((candy => (
                <div key={candy.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
                    <Link to={`/candies/${candy.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <h2>{candy.name}</h2>
                        <p>Color: {candy.color}</p>
                    </Link>
                </div>
            )))}
        </div>
    )
}

export default Candies