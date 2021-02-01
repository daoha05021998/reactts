import React from "../../_snowpack/pkg/react.js";
export default function Modal({onShowModal, onSetShowModal}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, onShowModal ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
    onClick: () => onSetShowModal(false)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative w-auto my-6 mx-auto max-w-3xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-3xl font-semibold"
  }, "Modal Title"), /* @__PURE__ */ React.createElement("button", {
    className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
    onClick: () => onSetShowModal(false)
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
  }, "\xD7"))), /* @__PURE__ */ React.createElement("div", {
    className: "relative p-6 flex-auto"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "my-4 text-gray-600 text-lg leading-relaxed"
  }, "I always felt like I could do anything. That\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\u2019t do anything, you won\u2019t do anything. I was taught I could do everything.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "opacity-50 fixed inset-0 z-40 bg-black"
  })) : null);
}
