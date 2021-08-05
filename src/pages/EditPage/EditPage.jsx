import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import EditForm from '../../components/EditForm/EditForm'
import lessonService from '../../utils/lessonService';



class EditPage extends Component {

// do I need this here?
    async componentDidMount() {
    const lessons = await lessonService.index()
    this.props.handleUpdateLessons(lessons)
}

render() {
    return (
        <div>
            <EditForm
            history = {this.props.history}/>
            <Link to='/'>Cancel</Link>

        </div>
    )

}

}

export default EditPage;