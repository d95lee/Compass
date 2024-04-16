// import { useState } from 'react'
import './SessionModal.css'
// import { useDispatch } from 'react-redux'

//need to createUser & loginUser in the backend 'sessionReducer, then import it'

const SessionModal = ({ modalState}) => {
    // const dispatch = useDispatch();
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     if (modalState === 'signup') {
    //         dispatch(createUser({username, password}))
    //             .then(() => setModalState(null))
    //     } else {
    //         dispatch(loginUer({ username, password }))
    //         .then(() => setModalState(null))
    //     }
    // };

    return(
        <div className='modal-background' >
            {/* <div className='modal-content' > */}
                <h2>SessionModal: {modalState}</h2>
                {/* <form onSubmit={handleSubmit}>
                    <input 
                        placeholder='Username'
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                    />
                    <input 
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <input type="submit" value={modalState} />
                </form> */}
            {/* </div> */}
        </div>
    )

}

export default SessionModal