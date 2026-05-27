import "./Header.css"

function Header() {
  return (
    <header className="header">

      {/* SEARCH BAR */}
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

       {/* ICONOS */}
      <div className="icons-container">
        <span className="icon">🔔</span>
        <span className="icon">🛠️</span>
      </div>

    </header>
  )
}

export default Header