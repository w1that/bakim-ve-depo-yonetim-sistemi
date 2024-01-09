import React, { useState } from "react";
import "./create-demand.css";
import Select from "../../../../../components/select/Select";

function CreateDemand() {
  const [description, setDescription] = useState("");
  const [option, setOption] = useState("");

  return (
    <div className="create-demand">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="create-demand__form"
      >
        <div className="create-demand__form__input-group">
          <label className="create-demand__form__input-group__label">
            Talep Açıklaması
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="create-demand__form__input-group__input"
            placeholder="Talep Açıklaması"
          ></textarea>
        </div>

        <div className="create-demand__form__input-group create-demand__form__input-group--selection">
          <label className="create-demand__form__input-group__label">
            Bakım Talep Edilen Varlık
          </label>

          <Select
            value={option}
            onChange={setOption}
            options={["Varlık 1", "Varlık 2", "Varlık 3"]}
          />
        </div>

        <button
          onSubmit={(e) => {
            e.preventDefault();
          }}
          onClick={(e) => {
            e.preventDefault();

            console.log({
              description,
              option,
            });
          }}
          className="create-demand__form__submit-button"
        >
          Talep Oluştur
        </button>
      </form>
    </div>
  );
}

export default CreateDemand;
