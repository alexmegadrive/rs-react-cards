import React from "react";
import "./card.scss";
import { IProductDetails } from "../CardsList/CardsList";

export default class Card extends React.Component<IProductDetails> {
  render() {
    const { title, price, scores, img } = this.props.details;
    return (
      <li className={"card"}>
        <img className={"card__img"} src={img}></img>
        <div className={"card__info"}>
          <h2 className={"card__title"}>
            {title.length > 70 ? title.slice(0, 70) + "..." : title}
          </h2>
          <div className={"card__details"}>
            <p className={"card__rating"}>{scores} scores</p>
            <p>
              {new Intl.NumberFormat("en-EN", {
                style: "currency",
                currency: "USD",
              }).format(price)}
            </p>
          </div>
        </div>
      </li>
    );
  }
}
