import React from "react";
import Header from "./react";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
              <div className="menu">
                <Header />
              </div>    
              
              <Order />
              <Inventory />

            </div>  
        );

    }
      
}

export default App;
