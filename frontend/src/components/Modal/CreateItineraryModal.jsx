import './CreateItineraryModal.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createItinerary } from '../../store/itinerary';

const CreateItineraryModal = ({ modalState, setModalState })  => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(createItinerary({ title, description }))
            .then(() => setModalState(null))

    };


    if (modalState === 'create') {
        return (
            <>
                <div className='create-modal-background' onClick={e => setModalState(null)}>
                    <div className='create-modal-content' onClick={e => e.stopPropagation()}>
                        <div className='create-form-header'>Start Planning Your Trip</div>
                        <div className='create-form-title'>Create Your Itinerary</div >
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

                            <input className='create-submit' type="submit" value="Create" />
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateItineraryModal;