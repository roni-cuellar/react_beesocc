import './RegisterPage.css'

const RegisterPage = () => {
    return (
        <div>

            <form action="procesar.php" method='POST'>
                <label for="Nombre">Nombre</label>
                <input type="text" id='Nombre' name='Nombre' />

                <br />

                <label for="clave">Contraseña:</label>
                <input type="password" id='clave' name='clave' />

                <br />

                <label for="email">Correo</label>
                <input type="email" id='email' name='email' />

                <br />

                <button type='submit'>Registrarse</button>
            </form>
        </div>
    )
}

export default RegisterPage