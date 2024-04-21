import './CreateItineraryModal.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createItinerary, fetchItineraries } from '../../store/itinerary';
import { Navigate } from 'react-router-dom';

const CreateItineraryModal = ({ modalState, setModalState })  => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [lastItinerary, setLastItinerary] = useState(false)
    const [newArr, setNewArr] = useState([]);
    const itineraryArr = useSelector(state => state.itinerary)
    const newItinerary = useSelector(state => state.itinerary[state.itinerary.length - 1])


    useEffect(() => {
        dispatch(fetchItineraries())
    }, [dispatch])
   
    // useEffect(() => {
    //     if (lastItinerary) {
    //         itineraryArr
    //     }
    // }, [lastItinerary])

    const getLastItinerary = () => {
        // if (lastItinerary) {
        //     const veryLastItinerary = itineraryArr[itineraryArr.length - 1]
        //  // if the last itinerary is true that means the itinerary was successfully created
            // if (veryLastItinerary) {
                // Navigate(`itinerary/form/${newItinerary}`)
            // }
        // }
    }   // that means that we can now grab the last itinerary from the array

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const test = await dispatch(createItinerary({ title, description }));
            setModalState(null);
            setNewArr(prevArr => [...prevArr, test]);
            console.log(newArr);
        } catch (error) {
            console.error('Error creating itinerary:', error);
        }
    };

    useEffect(() => {
        console.log(newArr);
    }, [newArr]);


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