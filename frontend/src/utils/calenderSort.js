// Test object id: "662184fee0ed831fc79e7512"

// Does not work in react bc can't find "events" yet when itinerary is not fetched
export const newItineraryObject = ( itinerary )=> {
    const eventsArray = itinerary?.events.map(event => ({...event, 'type': 'event'}));

    const transportationArray = itinerary?.transportations.map(transportation =>({...transportation, 'type': 'transportation'}));
    
    const livingsArray = itinerary?.livings.map(living => ({...living, 'type':'living'}));
    
    if (itinerary?.events) {
        itinerary[events] = eventsArray;
        itinerary[transportations] = transportationArray;
        itinerary[livings] = livingsArray;
    }

    return itinerary;
}



export const eventSort = (itinerary) => {

    let res = {};
    ///make a copy of events
    const events = itinerary?.events.slice();

    events?.map( event => {
        let formattedDate = formatDate(event.date);
        if(res[formattedDate]){
            res[formattedDate].push(event);
        }else{
            res[formattedDate] = [event];
        }
    })

    return res; /// {date: [], date: []}
};

export const livingSort = (itinerary) =>{
    let res = {};
    ///make a copy of livings
    const livings = itinerary?.livings.slice();

    livings?.map(living => {
        let formattedDate = formatDate(living.startDate);
        if(res[formattedDate]){
            res[formattedDate].push(living);
        }else{
            res[formattedDate] = [living];
        }
    })

    return res;

};

export const transportationSort = (itinerary) =>{
    let res = {};
    ///make a copy of transportations
    const transportations = itinerary?.transportations.slice();

    transportations?.map( transportation => {
        let formattedDate = formatDate(transportation.startDate);
        if(res[formattedDate]){
            res[formattedDate].push(transportation);
        }else{
            res[formattedDate] = [transportation];
        }
    })

    return res;

};

export const timelineSort = (itinerary) => {
    let res = {}
    const events = eventSort(itinerary);
    const livings = livingSort(itinerary);
    const transportations = transportationSort(itinerary);
    for (const key in events) {
        if (key in events) {
            res[key] = events[key];
        }
    }
    for (const key in livings) {
        if (key in livings) {
            if (key in res) {
                // If the key already exists in result, merge the values
                res[key] = [].concat(res[key], livings[key]);
            } else {
                // Otherwise, add the key-value pair to result
                res[key] = livings[key];
            }
        }
    }
    for (const key in transportations) {
        if (key in transportations) {
            if (key in res) {
                // If the key already exists in result, merge the values
                res[key] = [].concat(res[key], transportations[key]);
            } else {
                // Otherwise, add the key-value pair to result
                res[key] = transportations[key];
            }
        }
    }
    return res
}



export const oneDaySort = (Array) =>{
    //make a copy of array of one day of event, transportation, living, or timeline from above helper function
    // it will sort the day of object by looking at the startTime
    const copy = Array.slice();
    return copy.sort((a,b) => compareTimes(a.startTime, b.startTime));
};



export const formatDate = (dateString)=> {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding leading zero if needed
    const day = String(date.getDate()).padStart(2, '0'); // Adding leading zero if needed
    const year = date.getFullYear();

    return `${month}-${day}-${year}`;
};

function compareTimes(time1, time2) {
    // Parse time strings into Date objects
    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    // Create Date objects for comparison (use a reference date for consistency)
    const referenceDate = new Date(2000, 0, 1);
    const date1 = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), hours1, minutes1);
    const date2 = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), hours2, minutes2);

    // Compare the times
    if (date1 < date2) {
        return -1;
    } else if (date1 > date2) {
        return 1;
    } else {
        return 0;
    }
}
