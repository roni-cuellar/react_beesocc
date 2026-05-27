import "./StatisticsPage.css"

function StatisticsPage() {

  const equipos = [
     {
    id: 1,
    nombre: "Real Madrid",
    pj: 20,
    g: 16,
    e: 3,
    p: 1,
    gf: 38,
    gc: 18,
    dif: "+20",
    pts: 51
  },

  {
    id: 2,
    nombre: "Barcelona",
    pj: 20,
    g: 15,
    e: 2,
    p: 3,
    gf: 35,
    gc: 20,
    dif: "+15",
    pts: 47
  },

  {
    id: 3,
    nombre: "Atlético Madrid",
    pj: 20,
    g: 14,
    e: 4,
    p: 2,
    gf: 32,
    gc: 22,
    dif: "+10",
    pts: 46
  }
  ]

  return (

    <div className="container">

      <h1>Estadísticas LALIGA</h1>

      <div className="tabla">

        <h2>Tabla de Posiciones</h2>

        <table>

          <thead>
            <tr>
              <th>#</th>
              <th>Equipo</th>
              <th>PJ</th>
              <th>G</th>
              <th>E</th>
              <th>P</th>
              <th>GF</th>
              <th>GC</th>
              <th>DIF</th>
              <th>PTS</th>
            </tr>
          </thead>

          <tbody>

            {equipos.map((equipo) => (

              <tr key={equipo.id}>
                <td>{equipo.id}</td>
                <td>{equipo.nombre}</td>
                <td>{equipo.pj}</td>
                <td>{equipo.g}</td>
                <td>{equipo.e}</td>
                <td>{equipo.p}</td>
                <td>{equipo.gf}</td>
                <td>{equipo.gc}</td>
                <td>{equipo.dif}</td>
                <td>{equipo.pts}</td>
                
              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="cards">

        <div className="card">

          <h2>Máximo Goleador</h2>

          <p>Bellingham - 18 goles</p>

        </div>

        <div className="card">

          <h2>Máximo Asistente</h2>

          <p>Vinicius - 11 asistencias</p>

        </div>

      </div>

    </div>
  )
}

export default StatisticsPage