import React, { Component } from "react";
import FormEdit from "./FormEdit";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <FormEdit firstName="John" lastName="Doe" />
      </>
    );
  }
}

export default App;
