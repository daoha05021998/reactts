import React from "../../_snowpack/pkg/react.js";
import imgSale from "../../icon-saleoff.png.proxy.js";
import Modal from "./Modal.js";
const CardProduct = ({img, name, price, sale, onAdd}) => {
  const [showModal, setShowModal] = React.useState(false);
  function handleOpenModal() {
    setShowModal(true);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, {
    onShowModal: showModal,
    onSetShowModal: setShowModal
  }), /* @__PURE__ */ React.createElement("div", {
    className: "relative w-56 sm:w-56 md:w-60 lg:w-56 xl:w-52 2xl:w-full h-96 bg-white rounded-md shadow-lg border border-gray-500 "
  }, /* @__PURE__ */ React.createElement("div", {
    onClick: handleOpenModal
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex justify-between absolute left-1 top-2 z-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-col text-sm font-bold"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "line-through"
  }, price.toLocaleString("en-US")), /* @__PURE__ */ React.createElement("span", null, " \u0111")), /* @__PURE__ */ React.createElement("div", {
    className: "text-red-500"
  }, price.toLocaleString("en-US"), /* @__PURE__ */ React.createElement("span", null, " \u0111"))), /* @__PURE__ */ React.createElement("div", {
    className: "bg-no-repeat w-12 h-12 text-center pt-2 pr-2",
    style: {backgroundImage: `url(${imgSale})`}
  }, "-12%")), /* @__PURE__ */ React.createElement("img", {
    className: "h-64 w-full pt-1 pb-2 hover:opacity-80 duration-700 ",
    src: img,
    alt: ""
  }), /* @__PURE__ */ React.createElement("hr", {
    className: "border-t-4 border-gray-600 pb-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-34"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-lg font-semibold"
  }, name))), /* @__PURE__ */ React.createElement("button", {
    className: "bg-blue-600 active:bg-blue-400 focus:outline-none hover:bg-blue-800  px-4 py-2 z-20 rounded-md mt-2 font-semibold text-white",
    onClick: () => onAdd({name, img, amout: 0})
  }, "Add to cart")));
};
export default CardProduct;
