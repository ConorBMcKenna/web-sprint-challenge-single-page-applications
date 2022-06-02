import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
<Router>
    <App />
</Router>

, document.getElementById("root"));
// const root = React.DOM.createRoot(document.getElementById("root"));
// // root.render(
    
// // <React.StrictMode>
// //     <Router>
// //          <App />
// //     </Router>
// // </React.StrictMode>
// // )

