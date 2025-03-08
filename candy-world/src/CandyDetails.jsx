import { useParams } from "react-router-dom";

const candies = [
    { id: 1, name: 'Chocolate 🍫', color: 'Brown', description: 'Chocolate is a delicious treat that comes in various forms, including bars, truffles, and chocolate-covered fruits.' },
    { id: 2, name: 'Lollipop 🍭', color: 'Red', description: 'A lollipop is a sweet treat that comes in various flavors and colors.' },
    { id: 3, name: 'Gummy Bear 🍡', color: 'Green', description: 'Gummy bears are a popular gummy candy that are shaped like bears.' },
    { id: 4, name: 'Jelly Bean 🪼', color: 'Yellow', description: 'Jelly beans are a type of candy that come in a variety of colors and flavors.' },
    { id: 5, name: 'Marshmallow 🍫', color: 'Pink', description: 'Marshmallows are soft and fluffy candies that are often used in desserts and drinks.' },
    { id: 6, name: 'Chewing Gum 🍬', color: 'Blue', description: 'Chewing gum is a type of candy that is chewed and often used for its flavor and texture.' },
    { id: 7, name: 'Gummi Worm 🍭', color: 'Purple', description: 'Gummi worms are a type of gummy candy that are shaped like worms.' },
    { id: 8, name: 'Fruit Chew  🍭', color: 'Orange', description: 'Fruit chews are a type of candy that is shaped like fruits.' },
    { id: 9, name: 'Jelly Candy 🍭', color: 'Black', description: 'Jelly candy is a type of candy that is made from fruit juice and sugar.' },
    { id: 10, name: 'Caramel 🍭', color: 'Brown', description: 'Caramel is a type of candy that is made from sugar and butter.' },
    { id: 11, name: 'Gummy Worms 🍭', color: 'Green', description: 'Gummy worms are a type of gummy candy that are shaped like worms.' },
    { id: 12, name: 'Fruit Snacks 🍭', color: 'Red', description: 'Fruit snacks are a type of candy that is shaped like fruits.' }
]

function CandyDetails() {
    const { id } = useParams();
    const candy = candies.find(candy => candy.id === parseInt(id));
    return (
        <div style={{ backgroundColor: "#FFDA89", padding: "20px", minHeight: "100vh" }}>
            <h1>🍬 Candy Details</h1>
            <h2>{candy.name}</h2>
            <p>Color: {candy.color}</p>
            <p>{candy.description}</p>
        </div>
    )
}

export default CandyDetails