# Welcome to Compass

Compass is a social media website where users can interact with each other by creating, sharing, and interacting with itineraries to plan future trips or share past experiences. This allows for people to connect and make the best decisions depending on the user’s needs and wants, considering the location, price and type of trip (backpacking, luxury travel, exploring, etc.)


## Table of contents

1. Features
2. Technologies
3. Functionality
4. Contributors
5. Future Features


## Features

<br>

Users will have the ability to create or log in to their account via modal once entering the home page.



![image](https://github.com/d95lee/Compass/assets/112995904/3a68b586-4760-42c5-aad9-5cb623360faa)



<br>
<br>
 When first entering the page, users will have access to the contributor’s itineraries.
 <br>
<br>

```
useEffect(() => {
    dispatch(fetchItineraries())
    dispatch(fetchUsers())
  }, [dispatch])

    const caroline = useSelector(selectUserByUsername('caroline'))
    const jerry = useSelector(selectUserByUsername('jerry'))
    const jhon = useSelector(selectUserByUsername('jhon'))
    const david = useSelector(selectUserByUsername('david'))
    console.log(jerry)


    const carolineItinerary = useSelector(selectItineraryByUser(caroline))
    const davidItinerary = useSelector(selectItineraryByUser(david))
    const jerryItinerary = useSelector(selectItineraryByUser(jerry))
    const jhonItinerary = useSelector(selectItineraryByUser(jhon))
```

<br>
<br>



Whether logged in or logged out, users can preview itineraries.


![image](https://github.com/d95lee/Compass/assets/112995904/7e706ea4-b901-469b-8412-76845dc107ef)



<br>
<br>


Itineraries will be able to be categorized by continent, making the search process easier.

```
const ItineraryIndex = () => {

    const dispatch = useDispatch();

    const itineraries = useSelector(selectItineraries);

    useEffect(() => {
        dispatch(fetchItineraries());
    }, [dispatch])

    removeGlobe()

    return (
        <>
            <div className='itinerary-index-page'>
                <div className='itinerary-index-left'>
                    <div className='index-all-title'>All Itineraries</div>
                    <div className='index-locations-title'>Locations</div>
                    <div className='index-locations'>
                        <div className='index-location-text'>North America</div>
                        <div className='index-location-text'>Europe</div>
                        <div className='index-location-text'>Asia</div>
                        <div className='index-location-text'>South America</div>
                        <div className='index-location-text'>Africa</div>
                    </div>

                </div>
                <div className='itinerary-index-right'>
                    <div className='itinerary-index'>

                        {/* cannot directly pass in object to a sub component as prop, unless it's in an array */}
                        {Object.values(itineraries).map((itinerary, idx) => <ItineraryItem key={idx} itinerary={itinerary} />)}

                    </div>
                </div>
            </div>

        </>
    )
}
```

<br>
<br>

User profile shows liked or created itineraries. Can also upload or change profile pictures.

![image](https://github.com/d95lee/Compass/assets/112995904/ed465261-113c-4031-adb4-6499bb59046f)



<br>
<br>

The option to have a personal bio so that other users can know more about you is also available in the profile page.

```
const [bio, setBio] = useState(userBio ? userBio : '');
    const dispatch = useDispatch()
    const { userId } = useParams();



    const handleEdit = e => {
        e.preventDefault();
        dispatch(updateBio({bio}, userId))
        .then(() => setBioState(null))
    }

    const handleClose = () => {
        setBioState(null);
    }
```

<br>
<br>


When clicking on a specific itinerary, will display information on transportation, living and events.

![image](https://github.com/d95lee/Compass/assets/112995904/56380a7f-6a57-4d51-b05a-67d391b6d970)




<br>
<br>

Users browsing through itineraries can like the ones they are interested in, and it will have them be saved for future reference in their own profile.

```
 useEffect(() => {
        dispatch(fetchItinerary(itineraryId));
    }, [dispatch, itineraryId])
    const itinerary = useSelector(selectItinerary(itineraryId))

    const userId = itinerary?.author._id
    const user = useSelector(selectUser(userId));
    const currentUser = useSelector(selectCurrentUser)
    const currentUserDetails = useSelector(selectUser(currentUser?._id))

    useEffect(() => {
        dispatch(fetchUser(userId));
        dispatch(fetchUser(currentUser?._id))
    }, [dispatch, userId, currentUser])

    // useEffect to check the like status of the current itinerary
    useEffect(() =>{

        const likeStatus = (user, itineraryId) => {
            let liked = false;
            user?.likes.forEach(like => {
                if (itineraryId === like.itinerary) {
                    liked = true;
                    setHeartColor('#ff0000');
                }
            })
            return liked;
        }

        setLiked(likeStatus(currentUserDetails, itineraryId));

    }, [itineraryId, currentUserDetails, itinerary])

    const handleLike = e => {
        e.preventDefault()
        if (!liked){
           dispatch(likeItinerary(itineraryId))
            .then(()=>setHeartColor('#ff0000'));
        } else {
            let likeIdValue;
            currentUserDetails.likes.forEach(like =>{
                if (like.itinerary === itineraryId) {
                    likeIdValue = like._id
                }
            })
            dispatch(unlikeItinerary(likeIdValue, itineraryId))
                .then(()=>setHeartColor('#000000'))
        }

    }

    const handleEditClick = () => {
        navigate(`/itinerary/form/${itinerary?._id}`);
    }

    const itinerarySubobjectsArray = ( itinerary )=> {
        const newArray = [];  // event = { title: '', date: ''}
        itinerary?.events.map(event => (newArray.push({...event, 'type': 'event'})));
        itinerary?.transportations.map(transportation =>newArray.push({...transportation, 'type': 'transportation'}));
        itinerary?.livings.map(living => newArray.push({...living, 'type':'living'}));
        return newArray;
    }

    const handleUserShow = () => {
        navigate(`/profile/${user?._id}`);
    }
```
<br>
<br>

The itinerary forms were created in a way that will show them chronologically timed, as a result it can efficiently display events, transportations and living so that users viewing have the most recent information pop up first.

```
export const eventSort = (itinerary) => {
    let res = {};
    const events = itinerary?.events.slice();
    events?.map( event => {
        let formattedDate = formatDate(event.date);
        if(res[formattedDate]){
            res[formattedDate].push(event);
        }else{
            res[formattedDate] = [event];
        }
    })
    return res; 
};

export const livingSort = (itinerary) =>{
    let res = {};
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
                res[key] = [].concat(res[key], livings[key]);
            } else {
                res[key] = livings[key];
            }
        }
    }
    for (const key in transportations) {
        if (key in transportations) {
            if (key in res) {
                res[key] = [].concat(res[key], transportations[key]);
            } else {
                res[key] = transportations[key];
            }
        }
    }
    return res
}

export const oneDaySort = (Array) =>{
    const copy = Array.slice();
    return copy.sort((a,b) => compareTimes(a.startTime, b.startTime));
};

export const formatDate = (dateString)=> {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
};

function compareTimes(time1, time2) {
    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);
    const referenceDate = new Date(2000, 0, 1);
    const date1 = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), hours1, minutes1);
    const date2 = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), hours2, minutes2);

    if (date1 < date2) {
        return -1;
    } else if (date1 > date2) {
        return 1;
    } else {
        return 0;
    }
}
```




## Technologies

Compass was primarily built with MERN stack which includes:
- `React` & `JavaScript` frontend with `css` styling and `Redux state`
- `MongoDB`, `Mongoose`, `Node.js`, `Express` backend. Allowing routing and storing of information (username, email, password, etc)
- `AWS` allowing users to upload and store images.
- `Webpack` for managing dependencies in order to bundle and optimize our code.
- `npm` to manage project dependencies.
- `Heroku` for hosting the application.



## Functionality and MVP
- User Auth
  - Can create a user or log in if already have an account
  
![image](https://github.com/d95lee/Compass/assets/112995904/9545a267-37ea-4b16-bf2a-69ca2d14f991)

   <br>

- Itinerary
  - Users can create, delete, or update their own itineraries.
  <br>
  
![image](https://github.com/d95lee/Compass/assets/112995904/2a6327d5-d7d5-40f1-807a-ad233330ef14)

<br>

![image](https://github.com/d95lee/Compass/assets/112995904/1e16dd7e-cc22-4765-8f16-6a392a9b35f2)

<br>
- Itineraries
  - Users can Like/Follow/Favorite the itineraries they are interested in
<br>
<br>

![image](https://github.com/d95lee/Compass/assets/112995904/41d7f140-58ea-46e6-8e2c-f7d3c7101af1)

<br>

![image](https://github.com/d95lee/Compass/assets/112995904/6db7922e-65a2-41a1-8a17-39324bb18e5b)


<br>

- Transportation
  - Able to create or delete the transportation used on a specific trip.
  - Title
  - Start & end time
  - Start & end location
  - Start & end date
  - Description
  - Cost
    
 ![image](https://github.com/d95lee/Compass/assets/112995904/2be3d8a0-7bcf-43e6-bc86-b2e806a296c6)

  
- Living
  - Able to provide accommodation information
  - Title
  - Start & end time
  - Start/end date
  - Location
  - Description
  - Cost

  
 ![image](https://github.com/d95lee/Compass/assets/112995904/99a4e010-d701-48fb-afba-b74bffb1441c)

  
- Event
  - Provide information on events they attended while in that city.
  - Title
  - Start & end time
  - Date
  - Location
  - Description
  - Category
  - Cost
 
  ![image](https://github.com/d95lee/Compass/assets/112995904/daa9478c-9841-4aa3-a9fc-d3c5b4017f37)





## Contributors
- David Lee (Team lead, flex) | [github](https://github.com/d95lee) | [Linkedin](https://www.linkedin.com/in/david-lee-49959a20a/)
- Caroline Zhang (Frontend lead) | [github](https://github.com/caroline495) | [Linkedin](https://www.linkedin.com/in/carolineczhang/)
- Jerry Wang (Backend lead) | [github](https://github.com/ziyanwang1105) | [Linkedin](https://www.linkedin.com/in/zwang01/)
- Jhon Salazar (Flex) | [github](https://github.com/JhonJSC182) | [Linkedin](https://www.linkedin.com/in/jhon-salazar-655b24208/)

## Future features
- Search that interacts with 3rd party integration
  - Index, search, filter, show
  - Possible 3rd party integration
  - Yelp, Google Maps, AI Integration (ChatGPT)


