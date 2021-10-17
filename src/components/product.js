import React from 'react';
import "../styles/Product.css";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export const Product = ({id, title, price, image, rating, left}) => {
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__desc">{title}</p>
                <div className="product__price">
                <small>&#8377;</small>
                <strong>{price}.00</strong>
                </div>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className="rating__star"/>
                    ))}
                    {Array(left).fill().map((_, i) => (
                        <StarOutlineIcon className="rating__star"/>
                    ))}
                </div>
            </div>
            <img src={image}/>
            <button className="product__btn">Add to cart</button>
        </div>
    )
}
