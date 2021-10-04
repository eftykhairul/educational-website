import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Home.css"

const Home = () => {
    const [products,setProducts]=useState([]);
    const [cart, setCart]= useState([]);
    useEffect(()=>{
        fetch("./tools1.JSON")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        const newCart=[...cart, product];
        setCart(newCart)
    }

    return (
        <div className="main-container">
            <div className="product-container">
                {
                    products.map(product=><Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;