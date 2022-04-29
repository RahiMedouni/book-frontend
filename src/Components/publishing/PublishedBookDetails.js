const PublishedBookDetails = ({ params, authorBooks }) => {
  const authorBook = authorBooks.find((elt) => elt.title === params.title);
  console.log({ authorBooks });

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
        <h2>{authorBook?.title}</h2>
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
            <th>{authorBook?.title}</th>
          </tr>
          <tr>
            <td>Author</td>
            <td>{authorBook?.author}</td>
          </tr>
          <tr>
            <td>number of pages</td>
            <td>{authorBook?.pages}</td>
          </tr>
          <tr>
            <td>price</td>
            <td>{authorBook?.price + "$"} </td>
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

export default PublishedBookDetails;
