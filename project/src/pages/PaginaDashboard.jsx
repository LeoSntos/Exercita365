import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import CardsUsuariosDashboard from "../components/CardUsuarios/CardsUsuariosDashboard"
import CardLocais from "../components/CardLocais/CardsLocais"

import styles from "./PaginaDashboard.module.css"


function PaginaDashboard() {
    const center = [-11.434208898116495, -51.55740871060603]
    const position = [-27.69881090597128, -48.467332209483686]

    return (
        <div className={styles.mainCotent}>

            <div className={styles.estatisticas}>
                <div className={styles.usuarios}>
                    <CardsUsuariosDashboard usuariosOnline="3" />
                </div>

                <div className={styles.locais}>
                    <h2>Locais Cadastrados</h2>
                    <CardLocais NomeLocal="exemplo" endereco="armaçao" />
                </div>
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
    )
}

export default PaginaDashboard