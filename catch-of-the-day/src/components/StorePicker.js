import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // binding using es6
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  //binding in react? this is called a property just like myInput. This is really showing how you access 'this' in a method of a component
  goToStore = (event) => {
    event.preventDefault(); // stops the form from submitting

    const storeName = this.myInput.current.value;
    console.log(storeName); // getting the reference to the input

    this.props.history.push(`/store/${storeName}`);
  };

  // this doesn't work because react doesnt bind variables...
  // goToStore(event) {
  //   event.preventDefault(); // stops the form from submitting
  //   console.log("myInput", this.myInput);
  // }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
