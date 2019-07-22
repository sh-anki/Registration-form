import React from "react";

const SubmitDialog = ({ handleClose }) => {
  //let showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className="dialog live">
      <section className="dialog-wrapper">
        <div className="dialog-content">
          <h4>Thank You for Registering.</h4>
        </div>

        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default SubmitDialog;
