import React from 'react'; 
import NavBar from '../../components/NavBar/NavBar';



const OtherPage = (props) => {
    return (
        <div>



        <button type="button" class="btn btn-danger" >CREATE</button>


            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}/>

These are other resources
        </div>
    )
};


export default OtherPage;