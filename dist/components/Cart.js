import {faShoppingCart} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import React from "../../_snowpack/pkg/react.js";
const Cart = ({cartItems}) => {
  const getTotalItems = (items) => items.reduce((ack, item) => ack + item.amout, 0);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faShoppingCart
  }), /* @__PURE__ */ React.createElement("span", {
    className: "relative bottom-2 px-1 bg-gray-300 text-black rounded-xl text-sm"
  }, getTotalItems(cartItems)));
};
export default Cart;
