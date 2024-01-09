import React, { useState } from "react";
import "./select.css";
import ArrowIcon from "../../assets/dropdown-arrow.png";

function Select({ options = [], value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();

        setOpen(!open);
      }}
      className="select"
    >
      <div className="select__value">
        <span>{value || "Seçim Yap"}</span>

        <img src={ArrowIcon} alt="arrow" />
      </div>

      {open && (
        <div className="select__options">
          {options.map((option) => (
            <div
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="select__options__option"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </button>
  );
}

export default Select;
