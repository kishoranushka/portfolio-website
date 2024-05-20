import React from "react";


const Toggle = () => {
  return (
    <label htmlFor="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input
          id="theme"
          className="theme__toggle bg-red-300"
          type="checkbox"
          role="switch"
          name="theme"
          defaultValue="dark"
        />
        <span className="theme__fill bg-yellow-300" />
        <span className="theme__icon">
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
        </span>
      </span>
    </label>
  );
};

export default Toggle;
