import React from 'react'; 
import NavBar from '../../components/NavBar/NavBar';



const MainPage = (props) => {
    return (
        <div>



        <button type="button" class="btn btn-danger" >CREATE</button>


            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}/>

Welcome, please login to find some FREE resources!

        </div>
    )
};


export default MainPage;
