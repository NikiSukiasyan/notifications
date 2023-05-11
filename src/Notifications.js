import "./App.css";
import green from "./images/green.png";
import red from "./images/red.png";
import yellow from "./images/yellow.png";
import purple from "./images/purple.png";
import success from "./images/success.png";
import error from "./images/error.png";
import warning from "./images/warning.png";
import info from "./images/info.png";

const notification = [
  {
    id: 1,
    image: green,
    img: success,
    title: "Success",
    text: "Order Placed Successfully. You can check order delivery status.",
  },
  {
    id: 2,
    image: red,
    img: error,
    title: "Error",
    text: "Order Placed Successfully. You can check order delivery status.",
  },
  {
    id: 3,
    image: yellow,
    img: warning,
    title: "Warning",
    text: "Order Placed Successfully. You can check order delivery status.",
  },
  {
    id: 4,
    image: purple,
    img: info,
    title: "Info",
    text: "Order Placed Successfully. You can check order delivery status.",
  },
];

function Notification(props) {
  return (
    <div className="not-box">
      <div className="image-box">
        <img src={props.image} alt="color image" />
        <img src={props.img} alt="icon image" />
      </div>
      <div className="text-box">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

function Boxes() {
  return (
    <div className="boxes">
      {notification.map((item) => (
        <Notification
          key={item.id}
          image={item.image}
          img={item.img}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default Boxes;
