import styles from "./CardsLocais.module.css"

function CardLocais({props}) {
    return (
        <div>
            <div className={styles.locais}>
                <p>Nome do local: {props.nomeLocal}</p>
                <p>Nome do criador: {props.nomeCriador}</p>
                <p>Descriçao do local: {props.descriçaoLocal}</p>
                <p>Cordenadas: {props.cordenadas}</p>
                <p>Bairro: {props.bairro}</p>
                <p>Lougradouro: {props.logradouro}</p>
                <p>Cidade: {props.localidade}</p>
                <p>Estado: {props.uf}</p>
                <p> Tipos de Praticas:</p>
                {props.tiposDePraticas.map((pratica, index) => (<p key={index}> * {pratica}</p>))}
                
            </div>
        </div>
    )
}

export default CardLocais