import { Game } from 'utils/api'

const selectGame = <T>(obj: object, game: Game): T => Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({ [k]: v(game) })))

export default selectGame