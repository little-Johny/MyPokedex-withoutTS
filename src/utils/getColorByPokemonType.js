import {POKEMON_TYPE_COLORS} from './constants';

const DEFAULT_COLOR = "#A8A8A8"; // Color de fallback

const getColorByPokemonType = (types) => {
    if (!Array.isArray(types)) types = [types];

    const colors = types.map(type => POKEMON_TYPE_COLORS[type.toLowerCase()] || DEFAULT_COLOR);

    return colors.length > 1 ? colors : [colors[0], colors[0]];
};

export default getColorByPokemonType;