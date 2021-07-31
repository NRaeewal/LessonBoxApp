import React from 'react';
import NavBar from '../../components/NavBar/NavBar';



const LanguagePage = (props) => {
    return (
        <div>



        <button type="button" class="btn btn-danger" >CREATE</button>


            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}/>

These are LA resources
        </div>
    )
};

export default LanguagePage;