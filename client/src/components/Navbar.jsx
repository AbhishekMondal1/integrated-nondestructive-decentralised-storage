import React, { useState } from "react";
import Identicon from "identicon.js";
import icon  from "../icon.png";

const Navbar = (props) => {
    return (
      <nav className="navbar navbar-dark bg-dark p-0 text-monospace">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icon} width="30" height="30" className="align-top" alt="" />
          INDS - Integrated Nondestructive Decentralised Storage
        </a>
        <ul className="navbar-nav px-3">
          <li>
            <small id="account">
              <a
                target="_blank"
                alt=""
                className="text-white"
                rel="noopener noreferrer"
                href={"https://etherscan.io/address/" + props.account}
              >
                {props.account
                  ? props.account.substring(0, 6)
                  : "0x0"}
                ...
                {props.account
                  ? props.account.substring(38, 42)
                  : "0x0"}
              </a>
            </small>
            {props.account ? (
              <img
                alt=""
                className="ml-2"
                width="30"
                height="30"
                src={`data:image/png;base64,${new Identicon(
                  props.account,
                  30
                ).toString()}`}
              />
            ) : (
              <span></span>
            )}
          </li>
        </ul>
      </nav>
    );
  }

export default Navbar;