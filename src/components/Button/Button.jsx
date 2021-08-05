import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css'


const CreateButton = (props) => {
return (
        <div>
        <Link to='/create'>
        <button type="button" className="btn btn-danger" >CREATE</button>
        </Link>
        </div>
)
}

export default CreateButton; 