function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Collection App
        </a>

        <div className="d-flex gap-2">
          <button className="btn btn-primary">📘 Books</button>
          <button className="btn btn-outline-secondary">👤 Users</button>
          <button className="btn btn-outline-secondary">📦 Products</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
