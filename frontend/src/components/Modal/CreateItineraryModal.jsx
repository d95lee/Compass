import './CreateItineraryModal.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const CreateItineraryModal = ({ modalState, setModalState })  => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(signup({ email, username, password }))
            .then(() => setModalState(null))

    };

    
    if (modalState === 'create') {
        return (
            <>
                <div className='create-modal-background' onClick={e => setModalState(null)}>
                    <div className='create-modal-content' onClick={e => e.stopPropagation()}>
                        <h2>Create Itinerary</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                className='create-itinerary-input'
                                placeholder='Title for your itinerary'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <input
                                className='create-itinerary-input'
                                placeholder='Description'
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />

                            <input className='create-submit' type="submit" value={modalState} />
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateItineraryModal;