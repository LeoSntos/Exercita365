import styles from "./CardsLocais.module.css"
import * as proptypes from "prop-types"

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

CardLocais.propTypes = {
    props: proptypes.exact({
        nomeLocal: proptypes.string,
        nomeCriador: proptypes.string,
        descriçaoLocal: proptypes.string,
        cordenadas: proptypes.string,
        bairro: proptypes.string,
        logradouro: proptypes.string,
        localidade: proptypes.string,
        uf: proptypes.string,
        tiposDePraticas: proptypes.array
    })
}

export default CardLocais