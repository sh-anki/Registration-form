import React from "react";

const SubmitDialog = ({ handleClose }) => {  
  return (
    <div className="dialog live">
      <section className="dialog-wrapper">
        <div className="dialog-content">
          <h4>Thank You for Registering.</h4>
        </div>

        <button className="close-dialog" onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default SubmitDialog;
