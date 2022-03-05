import React, { Component } from "react";
import FirstButton from "./PostAdd";
import SecondButton from "./PostsList";

class BothButtons extends Component {
  state = {
    isEdit: false,
  };

  render() {
    return <div>{!this.state.isEdit ? <FirstButton /> : <SecondButton />}</div>;
  }
}

export default BothButtons;

// const BookCard = (props) => {
//   const [wished, setWished] = useState(false);

// {!wished && (
//   <Button
//     variant="light"
//     style={{ height: 30, width: 70, fontSize: 11, float: "right" }}
//     onClick={() => {
//       console.log("btn favori");
//       props.addToWish(props.index);
//       setWished(true);
//     }}
//   >
//     Wish list
//   </Button>
// )}
