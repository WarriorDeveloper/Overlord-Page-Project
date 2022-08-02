import { useContext } from 'react';
import { Link } from 'react-router-dom';

//context
import CharacterContext from '../context/Character/CharacterContext'

const Character = () => {
    const { selectedCharacter } = useContext(CharacterContext)
    return (
        <>
            {
                selectedCharacter ? (
                    <div className='container-fill'>
                        <h1 className='bg-dark p-3 text-center'>
                            <Link to='/' className='text-decoration-none text-light'>
                                Overlord - Characters
                            </Link>
                        </h1>
                        <br />
                        <div className='d-flex flex-column justify-content-center align-items-center vh-90'>
                            <img className='rounded-5' src={selectedCharacter.img} alt={selectedCharacter.name} width='350' height='450' />
                            <h2>{selectedCharacter.name}</h2>
                            <div>Raza: {selectedCharacter.race}</div>
                            <div>Familia: {selectedCharacter.family}</div>
                            <div>Karma: {selectedCharacter.karma}</div>
                        </div>
                    </div>
                ) : (<Link to='/'>
                    Volver
                </Link>)
            }
        </>
    );
}

export default Character;
