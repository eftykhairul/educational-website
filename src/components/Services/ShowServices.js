import React from 'react';
import './ShowServices.css'

const ShowServices = (props) => {
    const{name,email,instractor,duration,price,images}=props.product;
    return (
        <div className="background-color">
            <img className="image" alt="" src={images}/>
            <h1>Name: {name}</h1>
            <h5>Instractor: {instractor}</h5>
            <h5>Email: {email}</h5>
            <h5>Duration: {duration}</h5>
            <h5>Price: {price}</h5>
            <button onClick={()=> props.handleAddToCart(props.product)} className="purchage-button">add to cart</button>
        </div>
    );
};

export default ShowServices;