import './App.css';
import Header  from './components/Header'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login'
import Payment from './components/Payment'
import { useEffect } from 'react';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51I6SY3Gjbath9vdaLjpSfEkKJ8DihefSpGPsR7jYs8opz1dyde6iJ3VL2Ovoz2Ygj7EEfMQSUlbhHqzADAtZnM9N00ExaWlOv8"
)

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{

    auth.onAuthStateChanged(authUser => {
      console.log('USER', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    } )
  }, [])

  return (
    <Router>
    <div className="app">
      
      <Switch>
       
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
            <Header />
            <Elements stripe={promise} >
              <Payment />
            </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
