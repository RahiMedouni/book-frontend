import Purchase from "./Purchase";
import "./BookList.css";

const PurchasedItems = (props) => {
  console.log({ purchasedBooks: props.purchasedBooks });
  return (
    <div className="fixFlow">
      {props.purchasedBooks?.map((book, index) => (
        <Purchase
          index={index}
          key={index}
          book={book}
          addToCart={props.addToCart}
          updatePurchase={props.updatePurchase}
          updatePurchaseWish={props.updatePurchaseWish}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
};

export default PurchasedItems;
