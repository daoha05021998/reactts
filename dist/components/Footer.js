import React from "../../_snowpack/pkg/react.js";
import Contact from "./Contact.js";
import Policy from "./Policy.js";
import Socials from "./Socials.js";
const Footer = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full h-72 leading-10 text-lg bg-blue-700 justify-center mt-5"
  }, /* @__PURE__ */ React.createElement(Socials, null), /* @__PURE__ */ React.createElement(Contact, null), /* @__PURE__ */ React.createElement(Policy, null));
};
export default Footer;
