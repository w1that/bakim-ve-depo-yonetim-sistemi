import React, { useEffect, useState } from "react";
import "./create-demand.css";
import Select from "../../../../../components/select/Select";
import { useAppContext } from "../../../../../core/context/appContext";

function CreateDemand() {
  const { state } = useAppContext();
  const [description, setDescription] = useState("");
  const [option, setOption] = useState("");
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    try {
      fetch("https://localhost:7036/get-assets")
      .then((res) => res.json())
      .then((res) => {
        // update jsx after fetch
        setAssets(res); // {marka,model}
      }).catch((err) => {
        console.log(err);
      });
    } catch (error) {
      setAssets(["Varlık 1", "Varlık 2", "Varlık 3"]); // {marka,model}
    }
  }, []);


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
            // options={assets.map((asset) => asset.marka + " " + asset.model)}
          />
        </div>

        <button
          onSubmit={(e) => {
            e.preventDefault();
          }}
          onClick={(e) => {
            e.preventDefault();
            
            fetch("https://localhost:7036/create-demand", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                creatorId: state.user.id,
                demandDescription: description,
                asset: option,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                console.log(res);
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
