import React, { Component } from "react";
import InputText from "./InputText";
class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <InputText ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    );
  }
}

export default FocusInput;
