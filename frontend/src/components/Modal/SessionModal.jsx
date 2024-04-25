import { useState } from 'react'
import './SessionModal.css'
import { useDispatch } from 'react-redux'
import { login, signup } from '../../store/session';

//need to login & signup in the  'sessionReducer, then import it'

const SessionModal = ({ modalState, setModalState }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

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

    const handleDemoLogin = e=>{
        e.preventDefault()
        dispatch(login({email:"demo-user@appacademy.io", password: "starwars"}))
        .then(()=>setModalState(null))
    }

    const formMode = () => {
        if (modalState === 'signup') {
            return (
                <div className='modal-background' onClick={e => setModalState(null)}>
                <div className='signup-modal-content' onClick={e => e.stopPropagation()}>
                <h2>Create Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            className='buttons'
                            placeholder='Username'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            className='buttons'
                            placeholder='Email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className='buttons'
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input className='click' type="submit" value={modalState} />
                    </form>
                </div>
                </div>
            )
        } else if (modalState === 'login') {
            return (
                // -------------------LOGIN MODAL ----------------------
            <div className='modal-background' onClick={e => setModalState(null)}>
                <div className='login-modal-content' onClick={e => e.stopPropagation()}>
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                        <input
                            className='buttons'
                            placeholder='Email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className='buttons'
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input className='click' type="submit" value={modalState} />
                        <button className='demo-login' onClick={handleDemoLogin}>Demo Login</button>
                    </form>
                </div>
            </div>
            )
        }
    }

    return(
        <>
            {formMode()}
        </>
    )

}

export default SessionModal
