import "./CardsUsuariosDashboard.css"

function CardsUsuariosDashboard({usuariosOnline}) {
    return (
        <div className="Card">
            <h3>Usuarios</h3>
            <p>Total de Usuarios Online: {usuariosOnline}</p> 
        </div>
    )

}

export default CardsUsuariosDashboard

