import React from "react";
import Header from "../Header/Header";
// import "./card.scss";

export default class About extends React.Component {
  render() {
    return (
      <>
        <Header location="about" />
        <div style={{ fontSize: "40px" }}>About us</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. /n Earum
          quos, dicta explicabo maiores perferendis odit animi numquam eum,
          voluptatem quasi reiciendis dolorum ea corporis similique delectus
          vero, facilis eveniet suscipit?
        </div>
      </>
    );
  }
}
