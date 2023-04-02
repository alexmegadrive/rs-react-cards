import React from "react";
import Card from "../Card/Card";
import { IProduct } from "../../data/products";
import "./cardsList.scss";

export interface IProductDetails {
  details: IProduct;
}
type CardsListProps = {
  products: IProduct[] | never;
};

const CardsList: React.FC<CardsListProps> = ({ products }) => {
  return (
    <>
      {products && products.length ? (
        <div>
          Items found: {products.length}
          <ul className={"cards-list"}>
            {products.map((card, index) => (
              <Card key={index} details={card} />
            ))}
          </ul>
        </div>
      ) : (
        <div>No items found</div>
      )}
    </>
  );
};

export default CardsList;
