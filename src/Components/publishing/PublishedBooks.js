import BookCard from "./BookCard";
import "./BookList.css";

const PublishedBooks = (props) => {
  return (
    <div className="fixFlow">
      {props.authorBooks.map((authorBook, index) => (
        <BookCard
          index={index}
          key={index}
          authorBook={authorBook}
          handlePublishBook={props.handlePublishBook}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
};

export default PublishedBooks;
