import React from 'react';
import { useStateValue } from '../StateProvider';
import '../stylesheets/Product.css'

const Product = ({id, title, image, price, rating }) => {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      };

    return(
        <div className="product">
            <div className="product-info" >
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating" >
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                    
                </div>
            </div>
            <div >
                <img src="" alt=""/>
            </div>

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;