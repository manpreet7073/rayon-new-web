import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-4 text-muted">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary mt-3 px-4 py-2">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
