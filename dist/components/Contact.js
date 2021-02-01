import React from "../../_snowpack/pkg/react.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faHome, faPhone, faEnvelope} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
function Contact({}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", {
    className: "flex-col text-left w-1/4 pt-10 pl-20"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faHome
  }), " H\xE0 N\u1ED9i"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faPhone
  }), " 0376214088"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faEnvelope
  }), " daoha98@gmail.com")));
}
export default Contact;
