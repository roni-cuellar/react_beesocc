import "./Header.css"

function Header() {
  return (
    <header className="header">

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar equipos, jugadores o partidos..."
          className="search-input"
        />

        <button className="search-button">
          🔍
        </button>
      </div>

    </header>
  )
}

export default Header