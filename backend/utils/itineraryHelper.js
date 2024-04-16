exports.findObjById = (array, id) => {
    //the array is an array of object
    //find the index of the object that has the same id as the id in the params
    let index;
    array.forEach((el, idx) =>{
        if (el['_id'].toString() === id){
            index = idx;
        }
    })
    return index;
}

//updateItinerary.evenets[idx] = {...}
//updateItinerrary.save()
