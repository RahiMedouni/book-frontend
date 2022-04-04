import BookCard from "./BookCard";

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
          updatePurchaseWish={props.updatePurchaseWish}
          handleAddBook={props.handleAddBook}
          handleDeleteWish={props.handleDeleteWish}
          handleDelete={props.handleDelete}
          handleAdminDelete={props.handleAdminDelete}
        />
      ))}
    </div>
  );
};

export default BookList;
