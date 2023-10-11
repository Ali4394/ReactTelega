import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import "./Modal.css";

export const ModalAdd = ({ product, onChange, visible, setVisible }) => {
  const [helicopteriID, setID] = useState("");
  const [helicoptertitle, setHelicoptertitle] = useState("");
  const [helicopterdescription, setHelicopterdescription] = useState("");
  const [helicopterprice, setHelicopterprice] = useState("");

  const saveVertolet = () => {
    const NewVertolet = {
      ID: helicopteriID,
      title: helicoptertitle,
      price: helicopterprice,
      description: helicopterdescription,
    };

    onChange(NewVertolet);
  };

  return (
    <Dialog
      header="Add New Helicopter"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => setVisible(false)}
    >
      <label>ID</label>
      <InputText
        className="modal-input"
        value={helicopteriID}
        onChange={(e) => setID(e.target.value)}
      />
      <label>title</label>
      <InputText
        value={helicoptertitle}
        onChange={(e) => setHelicoptertitle(e.target.value)}
      />
      <label>Цена</label>
      <InputText
        value={helicopterprice}
        onChange={(e) => setHelicopterprice(e.target.value)}
      />
      <label>description</label>
      <InputText
        value={helicopterdescription}
        onChange={(e) => setHelicopterdescription(e.target.value)}
      />
      <Button label="Add" className="modal-button" onClick={saveVertolet} />
    </Dialog>
  );
};
