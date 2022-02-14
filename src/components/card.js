import React, { useState } from "react"
import pokemonsService from '../services/pokemons'
import SpinBar from '../components/spinbar'

const Card = (props) => {

    const [isExpanded, setIsExpanded] = useState(false)
    const [isFetching, setIsFetching] = useState()
    const [basicInfo, setBasicInfo] = useState(false)
    const [description, setDescription] = useState(false)
    const [moves, setMoves] = useState(false)

    const handleSeeMore = async () => {
        setIsExpanded(!isExpanded)
        if (!description) {
            setIsFetching(true)
            const id = props.pokemonInfo.id
            const resp = await pokemonsService.getPokemon(id)
            console.log(resp)
            setBasicInfo(resp.basicInfo)
            setDescription(resp.description)
            setMoves(resp.moves)
            setIsFetching(false)
        }
    }

    return (
        <div className="card col-sm-4 col-md-2" style={{ width: "18rem", margin: "10px" }}>
            <img className="card-img-top" src={props.pokemonInfo.photo} alt="Card image cap" />
            <div className="card-body">
                <h6 className="card-title"><b>Type</b>{`: ${props.pokemonInfo.types}`}</h6>
                <h6 className="card-title"><b>Weight</b>{`: ${props.pokemonInfo.weight}`}</h6>
                <h6 className="card-title"><b>Abilities</b>{`: ${props.pokemonInfo.abilities}`}</h6>
                {isExpanded ? <> {!isFetching? <> 
                                    <h6 className="card-title"><b>basic Info (name)</b>{`: ${basicInfo}`}</h6>
                                    <h6 className="card-title"><b>description</b>{`: ${description}`}</h6>
                                    <h6 className="card-title"><b>Moves</b>{`: ${moves}`}</h6>
                                    </> : <SpinBar />} </>
                 : <></>}
                <a onClick={handleSeeMore} className="btn btn-primary">Ver mas</a>
            </div>
        </div>
    )
}

export default Card