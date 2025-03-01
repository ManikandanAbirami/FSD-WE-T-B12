import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));

        console.log("Inside useEffect, ", products);
    }, [])

    return (
        <>
            <div>
                {/* {console.log("Inside JSX elements, ", products)} */}
                <h2>Products in store</h2>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
            <div>
                <h2>Enter Your Name:</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <p>Thank you, {name}</p>
            </div>
        </>
    )
}

export default Products