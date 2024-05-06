import "./CardsUsuariosDashboard.css"

function CardsUsuariosDashboard({UsuariosOn}) {
    return (
        <div className="Card">
            <h3>Usuarios</h3>
            <p>Total de Usuarios Online: {UsuariosOn}</p> 
        </div>
    )

}

export default CardsUsuariosDashboard

