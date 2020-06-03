import React, { Component } from "react";

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: true,
      isSave: false,
      isCancle: false,
      firstName: "",
      lastName: "",
    };
    this.handleOnClickEdit = this.handleOnClickEdit.bind(this);
  }

  handleOnClickEdit() {
    if (this.state.isEdit == true) this.setState({ isEdit: false });
    else this.setState({ isEdit: true });
  }

  render() {
    console.log("state: line22", this.state);
    return (
      <div>
        <div>First name:</div>
        <div>Last name:</div>
        {this.state.isEdit ? (
          <button onClick={this.handleOnClickEdit}>Edit</button>
        ) : (
          <div>
            <button onClick={this.handleOnClickEdit}>Save</button>
            <button onClick={this.handleOnClickEdit}>Cancel</button>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default FormEdit;
