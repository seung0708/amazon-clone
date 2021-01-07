import React from 'react'
import '../stylesheets/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link} from 'react-router-dom'
import {useStateValue} from '../StateProvider'
import { auth } from '../firebase';

const Header = () => {
    const [{basket, user}] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>   
            </Link>
            <div className="header-search">
                <input className="header-search-input" type="text" />
                <SearchIcon className="header-search-icon" />
            </div>

            <div className="header-nav">
                <Link to={!user && '/login'}>
                <div className="header-option" onClick={handleAuthentication}>
                    <span className="header-option-line1" >
                        Hello {!user ? ', Guest' : user.email}    
                    </span>
                    <span className="header-option-line2" >
                        {user ? 'Sign out' : 'Sign In'}
                    </span>
                    
                </div>
            <Link to='/orders'>
                <div className="header-option">
                    <span className="header-option-line-one">Returns</span>
                    <span className="header-option-line-two">Orders</span>
                </div>
            </Link>
                </Link>
                <div className="header-option" >
                <span className="header-option-line1" >
                        Returns 
                    </span>
                    <span className="header-option-line2" >
                        & Orders
                    </span>
                </div>
                <div className="header-option" >
                <span className="header-option-line1" >
                        Your 
                    </span>
                    <span className="header-option-line2" >
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="header-option-basket">
                    <ShoppingBasketIcon />
                    <span className="header-option-line2 header-basket-count">{basket?.length}</span>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header