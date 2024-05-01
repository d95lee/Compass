import { useState } from "react";
import './BioModal.css'
import { useDispatch } from "react-redux";
import { updateBio } from "../../store/user";
import { useParams } from "react-router-dom";

const BioModal = ({bioState, setBioState, userBio}) => {
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

    return (
        <div className="bio-modal-background"  onClick={() => setBioState(null)}>
            <div className="bio-modal-content" onClick={e => e.stopPropagation()}>
            <svg className="bio-modal-close-button" fill="#000000" height="20px" width="20px" viewBox="0 0 1792 1792" onClick={handleClose}>
                        <path d="M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4 c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1 c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"></path>
                    </svg>
            
            {/* <svg className="bio-modal-close" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.756 41.756" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465 c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071 C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343 c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"></path> </g> </g></svg> */}
                <div className="bio-heading">Edit Bio</div>
                <form className="bio-form" onSubmit={handleEdit}>
                    <textarea
                        className="bio-paragraph"
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                    />

                    <input className="submit-edit" type="submit" value='Edit' />
                </form>
            </div>
        </div>
    )


}

export default BioModal
