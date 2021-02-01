import React from "../../_snowpack/pkg/react.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faTelegram,
  faTiktok
} from "../../_snowpack/pkg/@fortawesome/free-brands-svg-icons.js";
const Socials = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", {
    className: "flex-col text-left w-1/4 pt-10 pl-20"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faFacebook,
    size: "2x"
  }), " Facebook"), /* @__PURE__ */ React.createElement("li", null, "c", /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faTwitter,
    size: "2x"
  }), " Twitter"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faTiktok,
    size: "2x"
  }), " Tiktok"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faGoogle,
    size: "2x"
  }), " Google"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faTelegram,
    size: "2x"
  }), " Telegram")));
};
export default Socials;
