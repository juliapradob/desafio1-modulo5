const Card = (props) => {
    return (<div>
            <img/>
            <h4>{props.nome}</h4>
            <p>{props.descricao}</p>
            <p>{props.precoAntigo}</p>
            <h2>{props.precoAtual}</h2>
            <p>{props.precoParcelado}</p>
            <button>{props.cta}</button>
        </div>
    )
}

export default Card