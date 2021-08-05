import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CreateForm from '../../components/CreateForm/CreateForm'
import lessonService from '../../utils/lessonService';



class CreatePage extends Component {

// do I need this here?
    async componentDidMount() {
    const lessons = await lessonService.index()
    this.props.handleUpdateLessons(lessons)
}

render() {
    return (
        <div>
            <CreateForm
            history = {this.props.history}/>
            <Link to='/'>Cancel</Link>

        </div>
    )

}

}

export default CreatePage;