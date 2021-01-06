import React from 'react';
import { useStateValue } from '../StateProvider';
import '../stylesheets/Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';


const Checkout = () => {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout" >
            <div className="checkout-left" >
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout-title">Your Shopping Cart</h2>
                        {basket.map(item => (
                            <CheckoutProduct 
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price}
                              rating={item.rating}
                            />
                        ))}
                </div>
            </div>
            <div className="checkout-right">
                <SubTotal />
            </div>
        </div>
        
    )
} 

export default Checkout;