import React from "react";
import Header from "../../components/Header/Header";

export default class Page404 extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div style={{ fontSize: "40px" }}>OOPS 404 ERROR</div>
      </>
    );
  }
}
