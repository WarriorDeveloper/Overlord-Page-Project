import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CharacterContext from '../context/Character/CharacterContext'

const Index = () => {

    const { getCharacters, characters, putSelectedCharacter } = useContext(CharacterContext)

    useEffect(() => {
        getCharacters()
    }, []);

    return (
        <div className='container-fill'>
            <h1 className='bg-dark p-3 text-center'>
                <Link to='/' className='text-decoration-none text-light'>
                    Overlord - Characters
                </Link>
            </h1>
            <div className='list-group p-5'>
                {
                    characters.map(character => (
                        <Link className='text-decoration-none' to='/Character' key={character.id} onClick={() => putSelectedCharacter(character.id)}>
                            <li className='list-group-item list-group-item-action p-2 fs-3 text-center'>
                                {character.name}
                            </li>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Index;
