import './RegisterPage.css'
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <main className='register-page'>

            <form action="procesar.php" method='POST'>

                <h1>Registrarse</h1>

                <label htmlFor="Nombre">Nombre</label>
                <input type="text" id='Nombre' name='Nombre' />

                <label htmlFor="clave">Contraseña</label>
                <input type="password" id='clave' name='clave' />

                <label htmlFor="email">Correo</label>
                <input type="email" id='email' name='email' />

                    <button type='button'>
                        Registrarse
                    </button>

            </form>

        </main>
    )
}

export default RegisterPage