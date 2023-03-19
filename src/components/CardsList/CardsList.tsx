import React from "react";
import Card from "../Card/Card";
import { IProduct } from "../../data/products";
import "./cardsList.scss";

export interface IProductDetails {
  details: IProduct;
}
export interface IProductsProps {
  products: IProduct[];
}

export default class CardsList extends React.Component<IProductsProps> {
  state = {
    products: this.props.products,
  };

  render() {
    return (
      <>
        {this.state.products && this.state.products.length ? (
          <div>
            Items found: {this.state.products.length}
            <ul className={"cards-list"}>
              {this.props.products.map((card, index) => (
                <Card key={index} details={card} />
              ))}
            </ul>
          </div>
        ) : (
          <div>No items found</div>
        )}
      </>
    );
  }
}
