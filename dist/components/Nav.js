import React, {useState} from "../../_snowpack/pkg/react.js";
import Cart from "./Cart.js";
import {faBars} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import Menu from "./Menu.js";
const Nav = ({onSearch, cartItems}) => {
  const [search, setSearch] = useState("");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      alert("Please add text");
      return;
    }
    onSearch({search});
    setSearch("");
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "lg:flex w-full h-12 bg-gray-800 fixed top-0 z-50"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "h-12 lg:w-1/2 sm:w-full w-full justify-center flex space-x-4 items-center"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "w-36 h-auto text-white"
  }, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, " Home")), /* @__PURE__ */ React.createElement("li", {
    className: "w-36 text-white"
  }, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement(Cart, {
    cartItems
  }), " Cart")), /* @__PURE__ */ React.createElement("li", {
    className: "w-36 text-white hidden sm:hidden md:hidden lg:block"
  }, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, "Login")), /* @__PURE__ */ React.createElement("li", {
    className: "w-36 text-white hidden sm:hidden md:hidden lg:block"
  }, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, "Register")), /* @__PURE__ */ React.createElement("li", {
    className: "w-36 block sm:block md:block lg:hidden",
    onClick: () => setIsOpenMenu(!isOpenMenu)
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faBars,
    size: "2x",
    color: "white"
  })), isOpenMenu && /* @__PURE__ */ React.createElement(Menu, null)), /* @__PURE__ */ React.createElement("ul", {
    className: "w-1/2 justify-end space-x-4 items-center mr-4 hidden sm:hidden md:hidden lg:flex"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "text-white"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "w-56 border-none rounded text-black text-2xl",
    type: "text",
    value: search,
    onChange: (e) => setSearch(e.target.value)
  })), /* @__PURE__ */ React.createElement("li", {
    className: "h-auto text-white"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-green-600 p-2 rounded px-4 hover:bg-blue-700",
    type: "submit",
    onClick: onSubmit
  }, "Search")))));
};
export default Nav;
