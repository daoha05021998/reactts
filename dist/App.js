import React, {useState} from "../_snowpack/pkg/react.js";
import "./App.css.proxy.js";
import CustomSlider from "./components/Carousel.js";
import Catagory from "./components/Catagory.js";
import ListProducts from "./components/ListProducts.js";
import Nav from "./components/Nav.js";
function App({}) {
  const [cartItems, setCartItems] = useState([]);
  const addTask = async ({search}) => {
    console.log(search);
  };
  const handleAdd = (product) => {
    console.log(product.name);
    setCartItems((prev) => {
      return [...prev, {...product, amout: 1}];
    });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement(Nav, {
    onSearch: addTask,
    cartItems
  }), /* @__PURE__ */ React.createElement(CustomSlider, null), /* @__PURE__ */ React.createElement(Catagory, null), /* @__PURE__ */ React.createElement(ListProducts, {
    onAdd: handleAdd
  }));
}
export default App;
