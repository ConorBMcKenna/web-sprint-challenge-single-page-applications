import React, {useState} from "react";
import {Switch, Route, Link} from "react-router-dom";
import Form from "./Components/Form"

const App = () => {
console.log("Rendered App")

const [mystate, setMyState] = useState([
  {
    Size: "Small, Medium, Large",
    Sauce: "Red, Ranch, BBQ Alfredo",
    Toppings: "Pepperoni, Sausage, Onions, Pineapple",
    Substitute: "Gluten Free Crust (+ $1.00)",
    Instructions: "Anything you would like to add>"

  }
])



  return (
    <div className="App">
      <header>
        <h1>McKennas Pizza</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Pizza">order-pizza</Link>
          <Link to="/Help">Help</Link>
        </nav>
      </header>
      <main>
        <Switch>
        <Route exact path = "/">
            <p>Homepage</p>
          </Route>
          <Route exact path = "/Pizza">
            <Form mystate = {mystate}/>
          </Route>
          <Route exact path = "/Help">
            <p>Help</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default App;
