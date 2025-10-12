import React from "react";

//this file sets up the format of the product cards that displays the image and name, and add to cart button
const ProductView = ({ name, image, addToCart }) => {
    return (
        <div style={{border:"1px solid gray", padding: "1rem", borderRadius: "30px", margin: "1rem", alignContent: "center", textAlign: "center"}}>
            <img
                src={image}
                alt={name}
                style={{width:"150px", height:"150px", objectFit:"cover", marginBottom:"0.5rem"}}
            />
            <p>{name}</p>
            <button onClick={() => addToCart({ name, image })} style={{background:"#FFDDE2", color:"black", padding:"0.5rem", border:"none", cursor:"pointer", borderRadius: "50px", fontSize:"1rem"}}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductView;