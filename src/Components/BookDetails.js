const BookDetails = ({ params, books }) => {
  const book = books.find((elt) => elt.title === params.title);
  console.log({ books });
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>hello in details</p>
        <p
          style={{
            color: "black",
            textAlign: "center",
          }}
        >
          {book?.title}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
