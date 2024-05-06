import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import CardsUsuariosDashboard from "../components/CardUsuarios/CardsUsuariosDashboard"
import CardLocais from "../components/CardLocais/CardsLocais"
import styles from "./PaginaDashboard.module.css"
import { useContext } from "react"
import { ContextLocal } from "../context/ContextLocal"
import { ContextUsuarios } from "../context/ContextUsuario"
import useFetch from "../hooks/useFetch"


function PaginaDashboard() {
    const center = [-11.434208898116495, -51.55740871060603]
    const position = [-27.69881090597128, -48.467332209483686]

    const { data: dataLocais } = useContext(ContextLocal)
    const { data } = useContext(ContextUsuarios)
    

    const usuariosOnline = data ? data.filter((usuario) => usuario.isLogado === true).length : 0;

    return (
        <div>
            <div className={styles.mainContent}>

                <div className={styles.usuarios}>
                    <h1>Usuario</h1>
                    <CardsUsuariosDashboard UsuariosOn={usuariosOnline} />
                </div>


                <div>
                    <MapContainer center={center} zoom={4} style={{ width: "60em", height: "60em" }} className={styles.contentMap}>

                        <TileLayer
                            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=WqRk2pZtPBLIiFTOw05Q"
                            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' />
                        <Marker position={position}>
                            <Popup>
                                exemplo de execicio
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <div className={styles.estatisticas}>
                <div className={styles.locais}>
                    <h2>Locais Cadastrados</h2>
                    {dataLocais && dataLocais.map(local => <CardLocais key={local.id} props={local} />)}
                </div>
            </div>
        </div>
    )
}

export default PaginaDashboard