

const LoginPage = () => {
    return (
        <div>

            <form action="procesar.php" method='POST'>
                <label for="email">Correo</label>
                <input type="email" id='email' name='email' />

                <br />

                <label for="clave">Contraseña:</label>
                <input type="password" id='clave' name='clave' />

                <br />

                <button type='submit'>Ingresar</button>
            </form>
            
        </div>
    )
}

export default LoginPage