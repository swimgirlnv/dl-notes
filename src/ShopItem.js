// TODO: create a component that displays a single bakery item
import "./BakeryItemCss.css"

export default function BakeryItem(props) {
  return (
    <div className="BakeryItem">
        <img src={props.image} width="60px"></img>
        <div className="container">
        <b>{props.name}</b> <br></br>
        <u>${props.price}</u>
      </div>
    </div>
  );
}

