import BookCard from "./BookCard";
import "./BookList.css";

const BookList = (props) => {
  return (
    <div className="fixFlow">
      {props.books.map((book, index) => (
        <BookCard
          index={index}
          key={index}
          book={book}
          addToCart={props.addToCart}
          addToWish={props.addToWish}
          updateWish={props.updateWish}
          updatePurchase={props.updatePurchase}
          handleDeleteWish={props.handleDeleteWish}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
};

export default BookList;
