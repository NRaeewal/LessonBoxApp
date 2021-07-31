import React from 'react'; 
import NavBar from '../../components/NavBar/NavBar';



const SocialPage = (props) => {
    return (
        <div>



        <button type="button" class="btn btn-danger" >CREATE</button>


            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}/>

These are social resources
        </div>
    )
};


export default SocialPage;