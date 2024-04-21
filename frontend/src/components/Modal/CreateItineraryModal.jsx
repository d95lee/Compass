import './CreateItineraryModal.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createItinerary, fetchItineraries } from '../../store/itinerary';
import { useNavigate } from 'react-router-dom';

const CreateItineraryModal = ({ modalState, setModalState })  => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [lastItinerary, setLastItinerary] = useState(false)
    const itineraryArr = useSelector(state => state.itinerary)


    useEffect(() => {
        dispatch(fetchItineraries())
    }, [dispatch])
   

    const handleSubmit = async e => {
        e.preventDefault();

        const test = dispatch(createItinerary({ title, description }))
            .then((data) => navigate(`itinerary/form/${data._id}`))    
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