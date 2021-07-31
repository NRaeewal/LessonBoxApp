import React from 'react';
import {Link} from 'react-router-dom';
import CreateForm from '../../components/CreateForm/CreateForm'

const CreatePage = () => {
    return (
        <div>
            <CreateForm/>
            <Link to='/'>Cancel</Link>

        </div>
    )
}

export default CreatePage;