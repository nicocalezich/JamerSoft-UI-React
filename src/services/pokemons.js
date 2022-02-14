import apiClient from "./apiClient";

const pokemonsService = {

    getPokemons: async (from) => {
        const resp = await apiClient.get(`pokemons/${from}`)
        return resp.data
    },

    getPokemon: async (id) => {
        const resp = await apiClient.get(`pokemons/find/${id}`)
        return resp.data
    }

}

export default pokemonsService