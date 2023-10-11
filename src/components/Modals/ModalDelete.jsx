import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import "./Modal.css";

export const ModalDelete = ({
  helicopteriID,
  product,
  onChange,
  visible,
  setVisible,
  setID,
}) => {
  const [helicopterId, setHelicopterId] = useState("");
  const saveID = () => {
    onChange(helicopterId || helicopteriID);
  };

  return (
    <Dialog
      header="Delete Helicopter"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => setVisible(false)}
    >
      <label className="modal-label">ID</label>
      <InputText
        className="modal-input"
        value={helicopterId || helicopteriID}
        onChange={(e) =>
          setHelicopterId(e.target.value) || setID(e.target.value)
        }
      />
      <Button label="Delete" className="modal-button" onClick={saveID} />
    </Dialog>
  );
};
