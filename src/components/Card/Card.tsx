import React from "react";
import "./card.scss";
import { IProductDetails } from "../CardsList/CardsList";

export default class Card extends React.Component<IProductDetails> {
  render() {
    return (
      <li className={"card"}>
        <img className={"card__img"} src={this.props.details.img}></img>
        <div className={"card__info"}>
          <h2 className={"card__title"}>
            {this.props.details.title.length > 70
              ? this.props.details.title.slice(0, 70) + "..."
              : this.props.details.title}
          </h2>
          <div className={"card__details"}>
            <p className={"card__rating"}>{this.props.details.scores} scores</p>
            <p>
              {new Intl.NumberFormat("en-EN", {
                style: "currency",
                currency: "USD",
              }).format(this.props.details.price)}
            </p>
          </div>
        </div>
      </li>
    );
  }
}
