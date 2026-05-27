import { useNavigate } from "react-router-dom"
function LoginPage() {

    const navigate = useNavigate()

    const iniciarSesion = (e) => {

        e.preventDefault()

        navigate("/crear")
    }
    return (
        <main className='register-page'>

            <form onSubmit={iniciarSesion}>

                <h1>Iniciar Sesión</h1>

                <label htmlFor="email">Correo</label>
                <input type="email" id='email' name='email' />

                <label htmlFor="clave">Contraseña</label>
                <input type="password" id='clave' name='clave' />

                <button type='submit'>Ingresar</button>

            </form>

        </main>
    )
}

export default LoginPage