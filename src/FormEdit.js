import React, { Component } from "react";

class FormEdit extends Component {
  constructor() {
    super();

    this.state = {
      isEdit: false,
      firstName: "",
      lastName: "",
    };
  }

  handleOnClickEdit = () => {
    this.setState({ isEdit: true });
  };

  handleOnClickSave = () => {
    this.setState({ isEdit: false });
  };

  handleOnClickCancel = () => {
    this.setState({ isEdit: false });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log("state: line22", this.state);

    return (
      <div>
        {!this.state.isEdit ? (
          <div>
            <div>First name: {this.state.firstName} </div>
            <div>Last name: {this.state.lastName} </div>
            <button onClick={this.handleOnClickEdit}>Edit</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              name="firstName"
              placeholder={this.state.firstName}
              onChange={this.handleOnChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder={this.state.lastName}
              onChange={this.handleOnChange}
            />
            <button onClick={this.handleOnClickSave}>Save</button>
            <button onClick={this.handleOnClickCancel}>Cancel</button>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default FormEdit;
