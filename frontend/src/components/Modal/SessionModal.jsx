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
    const [image, setImage] = useState(null);
    const [errors, setErrors]= useState([])



    const handleSubmit = e => {
        e.preventDefault();
        if (modalState === 'signup') {
            dispatch(signup({ email, username, image, password}))
                .then(() => setModalState(null))
                .catch(async res =>{
                    let data = await res.json();
                    setErrors(data);
                  });
        } else {
            dispatch(login({ email, password }))
            .then(() => setModalState(null))
            .catch(async res =>{
                let data = await res.json();
                setErrors(data);
              });
        }
    };

    const handleDemoLogin = e=>{
        e.preventDefault()
        dispatch(login({email:"demo-user@appacademy.io", password: "starwars"}))
        .then(()=>setModalState(null))
    }

    const updateFile = e => setImage(e.target.files[0]);
    const hasErrors = Object.values(errors).length !== 0;


    const formMode = () => {
        if (modalState === 'signup') {
            return (
                <div className='modal-background' onClick={() => setModalState(null)}>
                <div className='signup-modal-content' onClick={e => e.stopPropagation()}>
                <h2>Create Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <label >
                            <span className='modal-session-text'>Username:</span>
                            <input
                                className='buttons'
                                placeholder='Username'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </label>
                        <div className="event-modal-input-error">{hasErrors && errors.errors.username ? errors.errors.username : ''}</div>
                        <label>
                            <span className='modal-session-text'>Email:</span>
                            <input
                                className='buttons'
                                placeholder='Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </label>
                        <div className="event-modal-input-error">{hasErrors && errors.errors.email ? errors.errors.email : ''}</div>

                        <label >
                            <span className='modal-session-text'>Password:</span>
                            <input
                                className='buttons'
                                placeholder='Password'
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </label>
                        <div className="event-modal-input-error">{hasErrors && errors.errors.password ? errors.errors.password : ''}</div>
                        <label>
                            <span className='modal-session-text'>Upload Profile Image:</span>
                            <input type="file" accept=".jpg, .jpeg, .png" onChange={updateFile} />
                        </label>
                        <input className='click-signup' type="submit" value={modalState} />
                    </form>
                </div>
                </div>
            )
        } else if (modalState === 'login') {
            return (
                // -------------------LOGIN MODAL ----------------------
            <div className='modal-background' onClick={() => setModalState(null)}>
                <div className='login-modal-content' onClick={e => e.stopPropagation()}>
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span className='modal-session-text'>Email:</span>
                        <input
                            className='buttons'
                            placeholder='Email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <span className='modal-session-text'>Password:</span>
                        <input
                            className='buttons'
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>

                        <input className='click' type="submit" value={modalState} />
                        <button className='demo-login' onClick={handleDemoLogin}>Demo Login</button>
                    </form>
                    <div className="event-modal-input-error">{hasErrors && 'Invalid Credentials'}</div>
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
