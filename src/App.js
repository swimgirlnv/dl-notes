  import "./App.css";
  import { useState, useEffect } from "react";
  import shopData from "./assets/shop-data.json";
  import ShopItem from "./ShopItem";
  import SideBar from "./SideBar";

  /* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
  //shopData.forEach((item) => {
  // item.image = process.env.PUBLIC_URL + "/" + item.image;
  //});
  /* ############################################################## */

  function App() {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const [sortBy, setSortBy] = useState("")
    const [filterBy, setFilterBy] = useState([])
    
      let displayedItems = shopData.filter((item) => 
      {for(let i=0; i <= filterBy.length; i++)
        {if (item.type === filterBy[i]) 
          return false;
        }
        return true;
      })
      
      displayedItems = [...displayedItems].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy] > b[sortBy]) {
          return 1;
        } else {
          return 0;
        }
      })


    const addToCart = (name, price) => {
      if (cart.length === 0) {
        setTotal(price)
      } else {
        const newTotal = total + price
        setTotal(newTotal)
      }
      cart.push(name)
    }

    const removeFromCart = (name, price) => {
      if (cart.includes(name)) {
        const index = cart.indexOf(name)
        if (index > -1) {
          cart.splice(index, 1)
        }
        if (cart.length !== 0) {
          setTotal(total - price)
        }
        if (cart.length === 0) {
          setTotal(0)
        }
      }
    }

    
    const resetCart = () => {
      setTotal(0)
      cart.length = 0
    }
 

    return (
      <div className="App">
        <div className="grid-container">
        <div className="item1">
          <img src="https://media.tenor.com/JWm00dg5KXcAAAAj/club-penguin.gif" alt="rotating penguin gif" height="60px"></img>
        <h1>Penguin Party Palace</h1>
        <img src="https://media.tenor.com/MJWiL7RJ0qoAAAAj/penguin-dance.gif" alt="breakdancing penguin gif" height="60px"></img>
        </div>

        <div className="item2">
          <SideBar
          sortingFunction = {setSortBy}
          filteringFunction = {setFilterBy}
          ></SideBar>
        </div>

        <div className="item3">
          <div className="items">
            {displayedItems.map((item, index) => (  
            <div className="card" key={item.name}>
              <ShopItem {...item} />
              <button className="button" onClick={() => addToCart(item.image, item.price)}>Add</button>
              <button className="button" onClick={() => removeFromCart(item.image, item.price)}>Remove</button>
            </div>
          ))}
          </div>
        </div>

        <div className="item4">
          <div className="cart">
          <h2>Cart</h2>
          ${total}
          <button className="button" onClick={resetCart}>Empty Cart</button>
          </div>
        </div>

        <div className="item5">


        </div>
        </div>
      </div>
    );
  }

  export default App;
