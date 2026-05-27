import { useNavigate } from "react-router-dom";

import "./Ligas.css";

const Ligas = () => {

    const navigate = useNavigate();

    const usuario = "tt";

    const ligas =
        JSON.parse(
            localStorage.getItem("ligas")
        ) || [];

    const cerrarSesion = () => {

        navigate("/");
    };

    return (

        <div className="contenedor-ligas">

            <div className="top-ligas">

                <div>

                    <h1> 🏆{usuario}</h1>

                    <p>
                        Creado por: {usuario}
                    </p>

                </div>

                <button
                    className="btn-cerrar"
                    onClick={cerrarSesion}
                >
                    Cerrar Sesión
                </button>

            </div>

            <button
                className="btn-crear"
                onClick={() =>
                    navigate("/crear-liga")
                }
            >
                Crear Nueva Liga
            </button>

            <div className="contenedor-cards">

                {
                    ligas.map((liga, index) => (

                        <div
                            className="card-liga"
                            key={index}
                            onClick={() =>
                                navigate("/dashboard")
                            }
                        >

                            <h2> 🏆 {liga.nombre} </h2>

                            <p>
                                Temporada:
                                {" "}
                                {liga.temporada}
                            </p>

                            <p>
                                Estado:
                                {" "}
                                {liga.estado}
                            </p>

                            <p>
                                {liga.descripcion}
                            </p>

                        </div>

                    ))
                }

            </div>

        </div>
    );
};

export default Ligas;