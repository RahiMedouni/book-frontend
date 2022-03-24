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
      <Link to="/signup">
        <h3>Sign Up</h3>
      </Link>
      <Link to="/signuptranslator">
        <h3>Sign Up translator</h3>
      </Link>
      <Link to="/createpost">
        <h3>Create Post</h3>
      </Link>
    </div>
  );
}

export default Welcome;
