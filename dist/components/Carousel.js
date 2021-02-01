import React from "../../_snowpack/pkg/react.js";
import Slider from "../../_snowpack/pkg/react-slick.js";
import "../../_snowpack/pkg/slick-carousel/slick/slick.css.proxy.js";
import "../../_snowpack/pkg/slick-carousel/slick/slick-theme.css.proxy.js";
export default function CustomSlider() {
  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 5e3,
    autoplay: true,
    prevArrow: /* @__PURE__ */ React.createElement(PrevArrow, null),
    nextArrow: /* @__PURE__ */ React.createElement(NextArrow, null)
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-4/5 mx-auto mt-12"
  }, /* @__PURE__ */ React.createElement(Slider, {
    ...settings
  }, /* @__PURE__ */ React.createElement("div", {
    style: {width: 100}
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/daoha0502/image/upload/q_auto/v1588517607/shop/other/sl2_w0zrzi.png",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    style: {width: 100}
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/daoha0502/image/upload/q_auto/v1588517607/shop/other/sl2_w0zrzi.png",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/daoha0502/image/upload/q_auto/v1588517613/shop/other/sl1_hotjpl.png",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/daoha0502/image/upload/q_auto/v1588517602/shop/other/sl3_j9d1sa.png",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/daoha0502/image/upload/q_auto/v1588517613/shop/other/sl1_hotjpl.png",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/daoha0502/image/upload/q_auto/v1588517602/shop/other/sl3_j9d1sa.png",
    alt: ""
  }))));
}
function PrevArrow(props) {
  const {className, style, onClick} = props;
  return /* @__PURE__ */ React.createElement("div", {
    className,
    style: {
      ...style,
      display: "block",
      zIndex: "10",
      left: "50px"
    },
    onClick
  });
}
function NextArrow(props) {
  const {className, style, onClick} = props;
  return /* @__PURE__ */ React.createElement("div", {
    className,
    style: {
      ...style,
      zIndex: "10",
      right: "50px"
    },
    onClick
  });
}
