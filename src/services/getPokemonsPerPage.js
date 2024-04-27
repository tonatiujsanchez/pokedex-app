
export const getPokemonsPerPage = (allPokemons=[], page=1, pageSize = 16 ) => {
    const count = pageSize

    const start = (page - 1) * count
    const end = start + count

    return allPokemons.slice( start, end )
}
