import { useDispatch } from 'react-redux';
import './BasicModal.css';
import { updateItinerary } from '../../store/itinerary';
import { useState } from 'react';


const BasicModal = ({basicModalState, setBasicModalState, itinerary}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState(itinerary.title)
    const [description, setDescription] = useState(itinerary.description)
    const [country, setCountry] = useState(itinerary.country)
    const [errors, setErrors]= useState([])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateItinerary({...itinerary, title, description, country}))
            .then(() => setBasicModalState(!basicModalState))
            .catch(async res =>{
                let data = await res.json();
                setErrors(data);
              });
    }

    return (
        <>
            <div className='modal-background' onClick={e => setBasicModalState(null)} >
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <h3>Edit Basic information</h3>
                    <form className='basic-info-form' onSubmit={handleSubmit}>
                        <label>Title:
                            <input type="text"
                                value ={title}
                                onChange={e => setTitle(e.target.value)}/>
                        </label>
                        <label>Description:
                            <input type="text"
                                value ={description}
                                onChange={e => setDescription(e.target.value)}/>
                        </label>
                        <label>Country:
                            <input type="text"
                                value ={country}
                                onChange={e => setCountry(e.target.value)}/>
                        </label>
                        <input type="submit" value={'save'} />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BasicModal;