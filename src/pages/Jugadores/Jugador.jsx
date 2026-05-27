import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Jugador = () => {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");

    const [dorsal, setDorsal] = useState("");

    const [posicion, setPosicion] = useState("");

    const [fechaNacimiento, setFechaNacimiento] =
        useState("");

    const crearJugador = () => {

        if (
            !nombre ||
            !dorsal ||
            !posicion ||
            !fechaNacimiento
        ) {

            alert("Completa todos los campos");

            return;
        }

        const nuevoJugador = {

            nombre,
            dorsal,
            posicion,
            fechaNacimiento

        };

        const jugador =
            JSON.parse(
                localStorage.getItem("jugador")
            ) || [];

        jugador.push(nuevoJugador);

        localStorage.setItem(
            "jugador",
            JSON.stringify(jugador)
        );

        navigate("/");
    };

    return (

        <div style={{ padding: "30px" }}>

            <h1>
                Jugador
            </h1>

            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) =>
                    setNombre(e.target.value)
                }
            />

            <br />
            <br />

            <input
                type="number"
                placeholder="Dorsal"
                value={dorsal}
                onChange={(e) =>
                    setDorsal(e.target.value)
                }
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Posición"
                value={posicion}
                onChange={(e) =>
                    setPosicion(e.target.value)
                }
            />

            <br />
            <br />

            <input
                type="date"
                value={fechaNacimiento}
                onChange={(e) =>
                    setFechaNacimiento(e.target.value)
                }
            />

            <br />
            <br />

            <button onClick={crearJugador}>
                Crear Jugador
            </button>

        </div>
    );
};

export default Jugador;