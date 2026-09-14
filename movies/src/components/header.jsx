function Header() {
  return (
    <header className="header">

      <h1 className="logo">
        Movie Collection
      </h1>


      <div className="search-box">

        <span>⌕</span>

        <input
          type="text"
          placeholder="Search movies..."
        />

      </div>

    </header>
  );
}

export default Header;