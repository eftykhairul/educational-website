import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowServices from './ShowServices';
import './Services.css'


const Services = () => {
    const [products,setProducts]=useState([]);
    const [cart, setCart]= useState([]);
    
    useEffect(()=>{
        fetch("./tools.JSON")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    const handleAddToCart=(product)=>{
        const newCart=[...cart, product];
        setCart(newCart)
    }
    return (
        <div className='main-container'>
            <div className="product-container">
                {
                    products.map(product=><ShowServices
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></ShowServices>)
                }

            </div>
            
            <div>
                <Cart cart={cart}></Cart>
            
            </div>
            
        </div>
        
    );
};

export default Services;