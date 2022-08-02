import {useReducer} from 'react';
import CharacterContext from './CharacterContext';
import CharacterReducer from './CharacterReducer';

import axios from 'axios'

const CharacterState = (props) => {

    const initialState = {
        characters : [],
        selectedCharacter: null
    }

    const [state, dispatch] = useReducer(CharacterReducer, initialState)

    const getCharacters = async () => {
        const result = await axios.get('http://localhost:3000/characters')
        //console.log(result.data.characters)
        dispatch({
            type: 'GET_CHARACTERS',
            payload: result.data.characters
        })
    }

    const putSelectedCharacter = async (id) => {
        const result = await axios.get('http://localhost:3000/characters/'+id)
        //console.log(result.data.characterResult)
        dispatch({
            type: 'PUT_CHARACTER_SELECTED',
            payload: result.data.characterResult
        })
    }

    return (
        <CharacterContext.Provider
        value={
            {
                characters : state.characters,
                selectedCharacter : state.selectedCharacter,
                getCharacters,
                putSelectedCharacter
            }
        }
        >
            {props.children}
        </CharacterContext.Provider>
    );
}

export default CharacterState;
