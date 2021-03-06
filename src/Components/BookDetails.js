import AddQuiz from "./bookQuiz/AddQuiz";
import { Link } from "react-router-dom";

const BookDetails = ({ params, books }) => {
  // const [questions, setQuestions] = useState([]);

  const book = books.find((elt) => elt.title === params.title);
  console.log({ books });
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2>{book?.title}</h2>
      </div>
      <div
        style={{
          color: "black",
          textAlign: "center",
        }}
      >
        <table>
          <tr>
            <th>title</th>
            <th>{book?.title}</th>
          </tr>
          <tr>
            <td>Author</td>
            <td>{book?.author}</td>
          </tr>
          <tr>
            <td>number of pages</td>
            <td>{book?.pages}</td>
          </tr>
          <tr>
            <td>price</td>
            <td>{book?.price + "$"} </td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
          </tr>
        </table>
      </div>
      <AddQuiz />
      <span>
        <Link to="/quiz">
          <p>See Quiz</p>
        </Link>
      </span>
      {/* <img
        src={book?.coverUrl}
        alt="book's cover"
        style={{ width: 100, height: 200, textAlign: "center" }}
      />
      <p>book:</p> <h3>{book?.title}</h3>
      <p>book:</p> <h3>{book?.author}</h3> */}
    </div>
  );
};

export default BookDetails;
