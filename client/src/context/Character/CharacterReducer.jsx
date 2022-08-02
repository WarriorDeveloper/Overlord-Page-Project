import { GET_CHARACTERS, PUT_CHARACTER_SELECTED } from '../Types'

const CharacterReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters : payload
            }
        
        case PUT_CHARACTER_SELECTED:
            return {
                ...state,
                selectedCharacter: payload
            }
    
        default:
            return state;
    }
}

export default CharacterReducer;
