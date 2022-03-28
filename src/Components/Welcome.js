import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <Link to="/home/account">
        <h1>Hello to Twin Books</h1>
      </Link>
      <Link to="/signin">
        <h3>Sign In</h3>
      </Link>
      <Link to="/signinadmin">
        <h3>Sign In Admin</h3>
      </Link>
      <Link to="/signup">
        <h3>Sign Up</h3>
      </Link>
      <Link to="/signupadmin">
        <h3>Sign Up Admin</h3>
      </Link>
      <Link to="/quiz">
        <h3>Take Quiz</h3>
      </Link>
    </div>
  );
}

export default Welcome;
