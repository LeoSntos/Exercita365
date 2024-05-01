import "./CardsLocais.css"

function CardLocais({ NomeLocal, endereco }) {
    return (
        <div>
            <div className="locais">
                <p>Nome do local: {NomeLocal}</p>
                <p>Nome do criador: {NomeLocal}</p>
                <p>Descriçao do local: {NomeLocal}</p>
                <p>Localizaçao: {endereco} | cordenadas: {NomeLocal}</p>
                <p>Tipos de praticas: {NomeLocal}</p>
            </div>
        </div>
    )
}

export default CardLocais