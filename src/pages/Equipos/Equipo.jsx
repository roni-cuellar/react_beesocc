import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Equipo = () => {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");

    const [ciudad, setCiudad] = useState("");

    const crearEquipo = () => {

        if (!nombre || !ciudad) {

            alert("Completa todos los campos");

            return;
        }

        const nuevoEquipo = {

            nombre,
            ciudad

        };

        const equipo =
            JSON.parse(
                localStorage.getItem("equipo")
            ) || [];

        equipo.push(nuevoEquipo);

        localStorage.setItem(
            "equipo",
            JSON.stringify(equipo)
        );

        navigate("/");
    };

    return (

        <div style={{ padding: "30px" }}>

            <h1>
                Equipo
            </h1>

            <input
                type="text"
                placeholder="Nombre del equipo"
                value={nombre}
                onChange={(e) =>
                    setNombre(e.target.value)
                }
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Ciudad"
                value={ciudad}
                onChange={(e) =>
                    setCiudad(e.target.value)
                }
            />

            <br />
            <br />

            <button onClick={crearEquipo}>
                Crear Equipo
            </button>

        </div>
    );
};

export default Equipo;