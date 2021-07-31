import React from 'react'; 
import NavBar from '../../components/NavBar/NavBar';
import {Link} from 'react-router-dom';


const MainPage = (props) => {
    return (
        <div>


            <Link to='/create'>
                    <button type="button" class="btn btn-danger" >CREATE</button>
            </Link>

            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}/>

Welcome, please login to find some FREE resources!

        </div>
    )
};


export default MainPage;
