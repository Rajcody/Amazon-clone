import React ,{useEffect} from "react";  
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from'./Payment';
import {loadStripe} from "@stripe/stripe-js"; 
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe('pk_test_51Ia5ZzSAwwhbPqBWadf1v68JPrKGR6w5PV1Y4lhKa1Jlb0BIVZEfcsdHJBxCGjvveepB5peydm7uiOGez1EiqaNo00GolaXkCr');
  
function App() {

  const [{}, dispatch]=useStateValue();




  useEffect(() => {
   
    auth.onAuthStateChanged(authUser =>{
      console.log('USER IS >>>>',authUser);
      if(authUser){
        //user just logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })

      }else{
        //user logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    
  }, [])
  return (
    //BEM
    <Router>

        <div className="app">
            
          <Switch >

            <Route path ="/orders">
              <Header/>
                <Orders/>
                
            </Route> 

            <Route path ="/login">
                <Login/>
                
            </Route>  
                
                
              
                  
            <Route path ="/checkout">
                <Header/> 
                
                <Checkout/>
                  
                
            </Route>

            <Route path ="/payment">
                <Header/>
                <Elements stripe ={promise}>
                  <Payment/>

                </Elements>
                
                
            </Route>




            <Route path ="/">
                <Header/>
                
                <Home/>
            </Route>

          </Switch>

          
          
          

          
        </div>
    </Router  >
  );
}

export default App;
