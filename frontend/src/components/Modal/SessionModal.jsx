import { useState } from 'react'
import './SessionModal.css'
import { useDispatch } from 'react-redux'
import { login, signup } from '../../store/session';

//need to login & signup in the  'sessionReducer, then import it'

const SessionModal = ({ modalState }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (modalState === 'signup') {
            dispatch(signup({ email, username, password}))
                .then(() => setModalState(null))
        } else {
            dispatch(login({ email, password }))
            .then(() => setModalState(null))
        }
    };

    return(
        <div className='modal-background' >
            <div className='modal-content' >
                <h2>SessionModal: {modalState}</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        className='buttons'
                        placeholder='Username'
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                    />
                    <input 
                        className='buttons'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <input className='click' type="submit" value={modalState} />
                </form>
            </div>
        </div>
    )

}

export default SessionModal