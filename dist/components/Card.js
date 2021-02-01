import React from "../../_snowpack/pkg/react.js";
const Card = ({title, img}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-80 sm:w-full md:w-full h-48 bg-white-500 rounded-lg"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-40 w-full rounded-t-md",
    src: img,
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-8 border border-gray-800 rounded-b-md"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-bold text-indigo-900"
  }, title)));
};
export default Card;
