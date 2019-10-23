import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Button = ({ text, size, type, disabled, isLoading, link, icon }) => {
  const [active, toggleActiveBtn] = useState(false);

  const setSizeName = () => {
    switch (size) {
      case "s":
        return "btn-sm";
      case "m":
        return "btn-md";
      case "l":
        return "btn-lg";
      default:
        return "btn-md";
    }
  };

  const setType = () => {
    switch (type) {
      case "success":
        return "btn-success";
      case "warning":
        return "btn-warning";
      case "error":
        return "btn-error";
      default:
        return "";
    }
  };

  const toggleActive = () => toggleActiveBtn(!active);
  const clickHandle = e => disabled && e.preventDefault();

  return (
    <>
      {link ? (
        <a
          href={disabled ? " " : link}
          className={`btn link ${setSizeName()} ${disabled ? "disabled" : ""}`}
          onClick={clickHandle}
        >
          {icon && (
            <i
              className={`fa ${icon} ${!text && "icon"}`}
              aria-hidden="true"
            ></i>
          )}
          {isLoading && <span className="loader"></span>}
          {text ? text : ""}
        </a>
      ) : (
        <button
          className={`btn ${setSizeName()} ${setType()} ${
            active ? "active" : ""
          } ${disabled ? "disabled" : ""}`}
          onClick={toggleActive}
          disabled={disabled}
        >
          {icon && (
            <i
              className={`fa ${icon} ${!text && "icon"}`}
              aria-hidden="true"
            ></i>
          )}
          {isLoading && <span className="loader"></span>}
          {text ? text : ""}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  link: PropTypes.string,
  icon: PropTypes.string
};

export default Button;
