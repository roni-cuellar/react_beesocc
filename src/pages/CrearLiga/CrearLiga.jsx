import { useState } from "react";

import { useNavigate } from "react-router-dom";

const CrearLiga = () => {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");

    const [temporada, setTemporada] =
        useState("");

    const [estado, setEstado] =
        useState("");

    const [descripcion, setDescripcion] =
        useState("");

    const crearLiga = () => {

        if (
            !nombre ||
            !temporada ||
            !estado ||
            !descripcion
        ) {

            alert("Completa todos los campos");

            return;
        }

        const nuevaLiga = {

            nombre,
            temporada,
            estado,
            descripcion

        };

        const ligas =
            JSON.parse(
                localStorage.getItem("ligas")
            ) || [];

        ligas.push(nuevaLiga);

        localStorage.setItem(
            "ligas",
            JSON.stringify(ligas)
        );

        navigate("/ligas");
    };

    return (

        <div style={{ padding: "30px" }}>

            <h1>
                Crear Liga
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
                type="text"
                placeholder="Temporada"
                value={temporada}
                onChange={(e) =>
                    setTemporada(e.target.value)
                }
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Estado"
                value={estado}
                onChange={(e) =>
                    setEstado(e.target.value)
                }
            />

            <br />
            <br />

            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) =>
                    setDescripcion(e.target.value)
                }
            />

            <br />
            <br />

            <button onClick={crearLiga}>
                Crear Liga
            </button>

        </div>
    );
};

export default CrearLiga;