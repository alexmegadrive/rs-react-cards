import React from "react";
import Card from "../Card/Card";
import "./cardsList.scss";

export interface IProductDetails {
  details: IProduct;
}
export interface IProductsProps {
  products: IProduct[];
}

export interface IProduct {
  id: number;
  price: number;
  scores: number;
  img: string;
  title: string;
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
