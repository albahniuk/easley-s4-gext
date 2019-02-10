import React, { Component } from "react";
import ApiPicker from "./ApiPicker";

class Choose extends Component {
  render() {
    const { clientId, scopes, handleTemplate, name, email, phoneNumber, handlePresentationId } = this.props;
    return (
      <div className="choose-page d-flex justify-content-around">
        <div className="choose-page__btn select-btn">
          <ApiPicker
            clientId={clientId}
            scopes={scopes}
            handleTemplate={handleTemplate}
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            handlePresentationId={handlePresentationId}
          />
        </div>
        <div className="choose-page__btn upload-btn">
          <button type="button" className="btn btn-secondary btn-lg">Upload template</button>
        </div>
      </div>
    );
  }
}

export default Choose;
