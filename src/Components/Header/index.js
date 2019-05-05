import React from "react";
import "./index.css";

function Header(props) {
  return <header class="header">{props.children}</header>;
}

export default Header;
