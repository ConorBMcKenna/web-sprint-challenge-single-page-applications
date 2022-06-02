import React, {useState} from "react";
import {Switch, Route, Link} from "react-router-dom"
import Form from "./Components/Form"
import Order from "./Components/Order"




const App = () => {

  console.log("REndered App")

  const [myState, setMyState] = useState([
    {
      name: "",
      size: "",
      sauce: "",
      topping1: false,
      topping2: false,
      topping3: false,
      topping4: false,
      substitute:"",
      special:""
    }
  ])

  const addtoMyState = (newOrder) => {
    setMyState([...myState, newOrder])
  }

 return (
    <div className="App">
        <header>
          <nav>
            <h1>Lambda Eats</h1>
            <Link to ="/">Homepage</Link>
            <Link to ="/pizza">#order-pizza</Link>
            <Link to ="/order">My Order</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path = "/">
              <Link to = "/pizza">#order-pizza</Link>
            </Route>
          </Switch>
          <Switch>
            <Route exact path = "/pizza">
              <Form addtoMyState ={addtoMyState} />
            </Route>
          </Switch>
          <Switch>
            <Route exact path = "/order">
               <Order myState ={myState} /> 
            </Route>
          </Switch> 
        </main>
    </div>
  );
        }
export default App;
