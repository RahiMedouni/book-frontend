import { useState } from "react";
import { Link } from "react-router-dom";

function Welcome() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <Link to="/home/account">
        <h1>Hello to Twin Books</h1>
      </Link>
      <Link to="/quiz">
        <h3>Take Quiz</h3>
      </Link>

      <div>
        <h2>Add Image:</h2>
        <input type="file" onChange={handleChange} />
        <img src={file} />
      </div>
    </div>
  );
}

export default Welcome;
