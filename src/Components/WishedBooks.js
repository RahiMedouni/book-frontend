import WishCard from "./WishCard";

import "./BookList.css";

const WishedBooks = (props) => {
  console.log({ wishedList: props.wishedList });
  return (
    <div className="fixFlow">
      {props.wishedList?.map((book, index) => (
        <WishCard
          index={index}
          key={index}
          book={book}
          addToCart={props.addToCart}
          addToWish={props.addToWish}
          updateWish={props.updateWish}
          updatePurchaseWish={props.updatePurchaseWish}
          handleDeleteWish={props.handleDeleteWish}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
};

export default WishedBooks;
