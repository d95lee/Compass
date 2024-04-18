import './ItineraryForm.css'

const ItineraryForm = () => {
    return (
        <div className='form-background'>
            <div className='event-form'>
                <h1>Events</h1>
                <hr />
                <div className='event-info'>
                    <h4>Event title</h4>
                    <input type="text" />
                </div>
            </div>

            <div className='transportation-form'>
                <h1>Transportation</h1>
                <hr />
            </div>

            <div className='living-form'>
                <h1>Living</h1>
                <hr />
            </div>
        </div>
    )
}

export default ItineraryForm