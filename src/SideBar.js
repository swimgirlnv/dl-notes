// TODO: create a component that displays a single bakery item
import "./SideBarCss.css"
import shopData from "./assets/shop-data.json";
import {useState} from "react";

export default function SideBar(props) {

  const [checkedDe, setCheckedDe] = useState(false);
  const [checkedM, setCheckedM] = useState(false);
  const [checkedS, setCheckedS] = useState(false);
  const [checkedDr, setCheckedDr] = useState(false);
  let terms = [];
  
  // need this to make sure multiple boxes can be checked
  if (checkedDe) {
    terms.push("dessert")
  }
  if (checkedM) {
    terms.push("meal")
  }
  if (checkedS) {
    terms.push("snack")
  }
  if (checkedDr) {
    terms.push("drink")
  }
  

  const handleChangeDessert = () => {
    const check = !checkedDe;
    setCheckedDe(check);
    if (check) {
    terms.push("dessert")
    }
    else {
      terms.filter(term => term !== "dessert")
    }
    props.filteringFunction(terms)
  };

  const handleChangeMeal = () => {
    const check = !checkedM;
    setCheckedM(check);
    if (check) {
      terms.push("meal")
      }
      else {
        terms.filter(term => term !== "meal")
      }
      props.filteringFunction(terms)
  };

  const handleChangeSnack = () => {
    const check = !checkedS;
    setCheckedS(check);
    if (check) {
      terms.push("snack")
      }
      else {
        terms.filter(term => term !== "snack")
      }
      props.filteringFunction(terms)
  };

  const handleChangeDrink = () => {
    const check = !checkedDr;
    setCheckedDr(check);
    if (check) {
      terms.push("drink")
      }
      else {
        terms.filter(term => term !== "drink")
      }
      props.filteringFunction(terms)
  };

  const low = () => {
    props.sortingFunction("price")
  }
  
  const a = () => {
    props.sortingFunction("name")
  }

  const resetFilter = () => {
    props.sortingFunction("")
    props.filteringFunction([])
    setCheckedDe(false)
    setCheckedM(false)
    setCheckedS(false)
    setCheckedDr(false)
  }

  

  return (
      <div className="SideBar">
        <p className="p">Sort By</p>
          <div className="sort-by">
            <input type="radio" id="low" name="fav_language" value="low" onClick={low}></input>
            <label htmlFor="low">Price: low to high</label>
            <br></br>
            <input type="radio" id="a" name="fav_language" value="a" onClick={a} ></input>
            <label htmlFor="a">Name: a to z</label>            
          </div>
          <br></br>
          <p className="p">Filter Out</p>
          <div className="types">
            <form>
            <input type="checkbox" id="dessert" name="fav_language" value="dessert" checked={checkedDe}
          onChange={handleChangeDessert}></input>
            <label htmlFor="dessert">Dessert</label>
            <br></br>
            <input type="checkbox" id="meal" name="fav_language" value="meal" checked={checkedM}
          onChange={handleChangeMeal}></input>
            <label htmlFor="meal">Meal</label>
            <br></br>
            <input type="checkbox" id="snack" name="fav_language" value="snack" checked={checkedS}
          onChange={handleChangeSnack}></input>
            <label htmlFor="snack">Snack</label>
            <br></br>
            <input type="checkbox" id="drink" name="fav_language" value="drink" checked={checkedDr}
          onChange={handleChangeDrink}></input>
            <label htmlFor="drink">Drink</label>
            </form>
          </div>
          <br></br>

          <button className="button" onClick={resetFilter}>Reset All Filters</button>
      </div>
  );
}

