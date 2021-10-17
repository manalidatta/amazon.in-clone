import React from 'react';
import "../styles/Home.css";
import { Product } from './product';

export const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71-yif8IfmL._SX3000_.jpg"/>
                <div className="home__row">
                    <Product 
                        title="M MEDLER Epoch Nylon 55 litres Waterproof Strolley Duffle Bag- 2 Wheels - Luggage Bag - (Navy Blue)"
                        price={499.00}
                        image="https://images-eu.ssl-images-amazon.com/images/I/71tzEgzCFcL._AC_UL450_SR450,320_.jpg"
                        rating={3}
                        left={2}
                    />
                    <Product 
                        title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate"
                        price={9499.00}
                        image="https://m.media-amazon.com/images/I/7162Y5fPdkL._AC_UL480_QL65_.jpg"
                        rating={4}
                        left={1}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        title="JBL T460BT by Harman, Wireless On Ear Headphones with Mic, Pure Bass, Portable, Lightweight & Flat Foldable, Voice Assistant Support for Mobiles (Blue)"
                        price={2699.00}
                        image="https://m.media-amazon.com/images/I/51LR5-2F4jS._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                        left={1}
                    />
                    <Product 
                        title="Pigeon by Stovekraft Amaze Plus Electric Kettle with Stainless Steel Body, 1.5 litres boiler for Water, instant noodles, soup etc."
                        price={528.00}
                        image="https://m.media-amazon.com/images/I/51DGcy8eBCL._SL1080_.jpg"
                        rating={3}
                        left={2}
                    />
                    <Product 
                        title="Springtek Rollaway Foam and Wrought Iron Metal Folding Single Bed with 6-Inch Contemporary Foam Mattress, Lockable Wheels- (Black)"
                        price={11519.00}
                        image="https://m.media-amazon.com/images/I/81ynEcjHkNL._AC_UL480_QL65_.jpg"
                        rating={5}
                        left={0}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED TV X50|L50M6-RA (Black) (2021 Model)"
                        price={32999.00}
                        image="https://m.media-amazon.com/images/I/81sscKjSPiL._AC_UL480_QL65_.jpg"
                        rating={4}
                        left={1}
                    />
                    <Product 
                        title="Cello Prima Induction Base Non-Stick Aluminium Pan Cookware Set, 3-Pieces, Cherry Red"
                        price={1399.00}
                        image="https://m.media-amazon.com/images/I/7169jlr-0mL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                        left={1}
                    />
                </div>
            </div>
        </div>
    )
}
