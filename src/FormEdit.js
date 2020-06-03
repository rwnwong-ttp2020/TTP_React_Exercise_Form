import React, { Component } from "react";

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      isSave: false,
      isCancle: false,
      firstName: "",
      lastName: "",
    };
    this.handleOnClickEdit = this.handleOnClickEdit.bind(this);
    this.handleOnClickEdit = this.handleOnClickSave.bind(this);
    this.handleOnClickEdit = this.handleFirstName.bind(this);
    this.handleOnClickEdit = this.handleLastName.bind(this);
  }

  handleOnClickEdit() {
    this.setState({ isEdit: true });
  }

  handleOnClickSave() {
    this.setState({ isEdit: false });
    if (this.state.isSave === true) this.setState({ isEdit: true });
  }

  handleFirstName(event) {
    this.setState({ isEdit: false });
    this.setState({ firstName: event.target.value });
  }

  handleLastName(event) {
    this.setState({ isEdit: false });
    this.setState({ firstName: event.target.value });
  }
  render() {
    console.log("state: line22", this.state);
    return (
      <div>
        <div>First name:</div>
        <div>Last name:</div>
        {!this.state.isEdit ? (
          <button onClick={this.handleOnClickEdit}>Edit</button>
        ) : (
          <div>
            <button onClick={this.handleOnClickSave}>Save</button>
            <input
              type="text"
              name="firstName"
              onChange={this.handleOnClickEdit}
            />
            <button onClick={this.handleOnClickEdit}>Cancel</button>{" "}
            <input
              type="text"
              name={this.state.lastName}
              onChange={this.handleLastName}
            />
          </div>
        )}
      </div>
    );
  }
}

export default FormEdit;
